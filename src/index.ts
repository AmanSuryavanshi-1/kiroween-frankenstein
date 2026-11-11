import { runTerminalCommand } from './core/terminal_runner.js';
import { performErrorAutopsy } from './diagnostics/error_autopsy.js';

async function main() {
  console.log('🎃 Project Frankenstein — Initializing Terminal Interceptor...');
  
  // Example command execution
  const testCmd = 'node -e "throw new TypeError(\'Cannot read properties of undefined (reading \\\'token\\\')\')"';
  console.log(`> Executing probe: ${testCmd}`);
  
  const result = await runTerminalCommand(testCmd);
  console.log(`> Process exited with code: ${result.exitCode}`);

  if (result.exitCode !== 0) {
    const autopsy = performErrorAutopsy(result.stderr, result.stdout);
    console.log('\n⚡ [Frankenstein Autopsy Report]:');
    console.log(`   Error Type: ${autopsy.errorType}`);
    console.log(`   Summary:    ${autopsy.summary}`);
    console.log(`   Patch:      ${autopsy.suggestedPatch}`);
  }
}

main().catch(console.error);
