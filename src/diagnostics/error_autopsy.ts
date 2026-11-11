export interface DiagnosticReport {
  errorType: string;
  summary: string;
  targetFile?: string;
  lineNumber?: number;
  rawStack: string;
  suggestedPatch: string;
  confidence: number;
}

export function performErrorAutopsy(stderr: string, stdout: string): DiagnosticReport {
  const fullLog = stderr + '\n' + stdout;

  // Pattern 1: Node.js SyntaxError / ReferenceError / TypeError
  const nodeMatch = fullLog.match(/(TypeError|ReferenceError|SyntaxError|RangeError):\s*(.+)/);
  const fileMatch = fullLog.match(/(?:at\s+.*\(|at\s+)?([a-zA-Z0-9_\\/-]+\.(?:ts|js|py|rs|go)):(\d+):(\d+)/);

  if (nodeMatch) {
    return {
      errorType: nodeMatch[1],
      summary: nodeMatch[2],
      targetFile: fileMatch ? fileMatch[1] : undefined,
      lineNumber: fileMatch ? parseInt(fileMatch[2], 10) : undefined,
      rawStack: fullLog.slice(0, 1500),
      suggestedPatch: `// [Frankenstein Auto-Resurrect]: Handled ${nodeMatch[1]} in ${fileMatch ? fileMatch[1] : 'target module'}\n// Ensure defensive null-checks or missing import declaration.`,
      confidence: 0.92
    };
  }

  // Pattern 2: Python Traceback
  const pyMatch = fullLog.match(/([a-zA-Z]+Error):\s*(.+)/);
  const pyFileMatch = fullLog.match(/File "([^"]+)", line (\d+)/);

  if (pyMatch) {
    return {
      errorType: pyMatch[1],
      summary: pyMatch[2],
      targetFile: pyFileMatch ? pyFileMatch[1] : undefined,
      lineNumber: pyFileMatch ? parseInt(pyFileMatch[2], 10) : undefined,
      rawStack: fullLog.slice(0, 1500),
      suggestedPatch: `# [Frankenstein Auto-Resurrect]: Safeguard ${pyMatch[1]} at line ${pyFileMatch ? pyFileMatch[2] : 'unknown'}`,
      confidence: 0.88
    };
  }

  // Default fallback
  return {
    errorType: 'UnhandledProcessExit',
    summary: 'Process exited with non-zero exit code without explicit exception signature.',
    rawStack: fullLog.slice(0, 1500),
    suggestedPatch: '// Inspect standard error output and verify environment prerequisites.',
    confidence: 0.70
  };
}
