import { spawn } from 'child_process';

export interface ExecutionResult {
  command: string;
  exitCode: number;
  stdout: string;
  stderr: string;
  durationMs: number;
}

export async function runTerminalCommand(command: string, cwd: string = process.cwd()): Promise<ExecutionResult> {
  const startTime = Date.now();
  return new Promise((resolve) => {
    const isWin = process.platform === 'win32';
    const shell = isWin ? 'cmd.exe' : '/bin/sh';
    const args = isWin ? ['/c', command] : ['-c', command];

    let stdout = '';
    let stderr = '';

    const proc = spawn(shell, args, {
      cwd,
      env: { ...process.env, FORCE_COLOR: '1' }
    });

    proc.stdout?.on('data', (data) => {
      stdout += data.toString();
    });

    proc.stderr?.on('data', (data) => {
      stderr += data.toString();
    });

    proc.on('close', (code) => {
      resolve({
        command,
        exitCode: code ?? 1,
        stdout,
        stderr,
        durationMs: Date.now() - startTime
      });
    });

    proc.on('error', (err) => {
      stderr += err.message;
      resolve({
        command,
        exitCode: 1,
        stdout,
        stderr,
        durationMs: Date.now() - startTime
      });
    });
  });
}
