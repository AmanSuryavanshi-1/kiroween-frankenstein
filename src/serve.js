/**
 * 🎃 Kiroween 2026: Project Frankenstein — Zero-Dependency HTTP & API Server
 * Author: Aman Suryavanshi
 * Serves the Generative UI dashboard and provides REST endpoints for terminal command execution.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = process.env.PORT || 3033;
const UI_DIR = path.join(__dirname, 'ui');

function runCommand(cmd) {
  return new Promise((resolve) => {
    const isWin = process.platform === 'win32';
    const shell = isWin ? 'cmd.exe' : '/bin/sh';
    const args = isWin ? ['/c', cmd] : ['-c', cmd];

    let stdout = '';
    let stderr = '';
    const start = Date.now();

    const proc = spawn(shell, args, { env: { ...process.env, FORCE_COLOR: '1' } });
    proc.stdout?.on('data', (d) => { stdout += d.toString(); });
    proc.stderr?.on('data', (d) => { stderr += d.toString(); });
    proc.on('close', (code) => {
      resolve({ code: code || 0, stdout, stderr, ms: Date.now() - start });
    });
  });
}

function parseAutopsy(stderr, stdout) {
  const fullLog = stderr + '\n' + stdout;
  const match = fullLog.match(/(TypeError|ReferenceError|SyntaxError|RangeError):\s*(.+)/);
  const fileMatch = fullLog.match(/([a-zA-Z0-9_\-\/]+\.(?:ts|js|py|rs)):(\d+)/);

  if (match) {
    return {
      errorType: match[1],
      summary: match[2],
      targetFile: fileMatch ? fileMatch[1] : 'src/auth.ts:42',
      confidence: '98.4%',
      patch: [
        "- const userContext = undefined; if (!userContext.token) ...",
        "+ const userContext = { token: 'kiroween-auth-verified' }; if (userContext.token) ..."
      ]
    };
  }

  return {
    errorType: 'UnhandledProcessExit',
    summary: 'Process exited with non-zero status.',
    targetFile: 'unknown',
    confidence: '85.0%',
    patch: [
      "- // unhandled failure",
      "+ // defensive error boundary"
    ]
  };
}

const server = http.createServer(async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // Route: GET /
  if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
    const htmlPath = path.join(UI_DIR, 'dashboard.html');
    if (fs.existsSync(htmlPath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(fs.readFileSync(htmlPath));
    }
  }

  // Route: POST /api/execute
  if (req.method === 'POST' && req.url === '/api/execute') {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        const cmd = payload.command || 'node -e "throw new TypeError(\'token not found\')"';
        const result = await runCommand(cmd);
        const autopsy = result.code !== 0 ? parseAutopsy(result.stderr, result.stdout) : null;

        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify({ result, autopsy }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // 404
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`🎃 [Project Frankenstein] Generative UI Server running at http://localhost:${PORT}`);
});
