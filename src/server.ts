import express from 'express';
import http from 'http';
import path from 'path';
import { runTerminalCommand } from './core/terminal_runner.js';
import { performErrorAutopsy } from './diagnostics/error_autopsy.js';

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3033;

app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'src', 'ui')));

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'src', 'ui', 'dashboard.html'));
});

app.post('/api/execute', async (req, res) => {
  const { command } = req.body;
  if (!command) {
    return res.status(400).json({ error: 'Command string is required' });
  }

  const result = await runTerminalCommand(command);
  const autopsy = result.exitCode !== 0 ? performErrorAutopsy(result.stderr, result.stdout) : null;

  return res.json({
    result,
    autopsy
  });
});

server.listen(PORT, () => {
  console.log(`[Frankenstein] Dashboard live at http://localhost:${PORT}`);
});
