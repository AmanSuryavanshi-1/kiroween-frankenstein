# 🎃 Devpost Submission Draft: Project Frankenstein

**Hackathon:** [Kiroween 2026](https://kiroween.devpost.com/)  
**Track:** Frankenstein (*"Stitch together technologies that don't usually work together"*)  
**GitHub Repository:** [https://github.com/AmanSuryavanshi-1/kiroween-frankenstein](https://github.com/AmanSuryavanshi-1/kiroween-frankenstein)  
**Live Interactive Web Demo:** [https://amansuryavanshi-1.github.io/kiroween-frankenstein/](https://amansuryavanshi-1.github.io/kiroween-frankenstein/)  
**Author:** Aman Suryavanshi ([@amansuryavanshi2002](https://devpost.com/amansuryavanshi2002))

---

## ⚡ Elevator Pitch (1-Line Summary)
> **Frankenstein** brings dead terminal processes back to life by stitching archaic 50-year-old VT100 CLI streams directly into modern reactive Generative UI resurrection cards, powered by Kiro's autonomous self-healing steering engine.

---

## 💡 Inspiration
Developers spend countless hours deciphering cryptic terminal error outputs, broken pipe streams, and abrupt exit code crashes. The command line is an archaic 50-year-old abstraction—pure text in, pure text out. We asked: *What if we could stitch together the archaic world of legacy terminal processes with cutting-edge client-rendered Generative UI, allowing an autonomous AI agent (Kiro) to diagnose, patch, and resurrect broken processes in real time?*

---

## ⚙️ What It Does
1. **Low-Level Process Interception:** Spawns and wraps any terminal command (Node, Python, Go, Rust), monitoring standard output and error descriptors in real time while enforcing process tree isolation.
2. **Kiro Error Autopsy Engine:** When a process crashes (non-zero exit code), Frankenstein intercepts the stack dump, parses the exception signature, isolates the failure seam, and formulates a minimal, verified code diff.
3. **Generative UI Resurrection Dashboard:** Rather than printing more illegible terminal text, Frankenstein renders an aesthetic, interactive dashboard displaying live ANSI telemetry, error diagnostics, and a one-click **"⚡ Apply Patch & Resurrect"** interface.
4. **Autonomous Re-Execution:** Once the patch is applied, Frankenstein automatically re-executes the pipeline and confirms that all test suites pass.

### 📸 Dashboard Screenshots
| 1. Intercepting Terminal Crash & AST Autopsy | 2. One-Click Patch Application & Resurrected Pipeline |
| :---: | :---: |
| ![Kiro Error Autopsy](../assets/dashboard-autopsy.png) | ![Process Resurrected](../assets/dashboard-resurrected.png) |

---

## 🛠️ How We Built It
- **The Dead Tech (Legacy Terminal):** Direct process execution via Node.js `child_process` and low-level descriptor piping (`src/core/terminal_runner.ts`), handling Windows `cmd.exe` escaping traps and ANSI color sequences.
- **The Living Tech (Generative UI):** High-density, reactive single-file dashboard built with Tailwind CSS, OKLCH color spaces, and real-time process monitoring (`src/ui/dashboard.html`).
- **The Agent Brain (Kiro):** Fully configured with Kiro's native `/.kiro` root configuration:
  - `/.kiro/specs/project-spec.md`: Tracks project requirements and acceptance criteria.
  - `/.kiro/steering/default.md`: Guides the Kiro agent on self-healing AST repair loops and defensive null-checks.
  - `/.kiro/settings.json`: Configures autonomous mode and steering targets.

---

## 🚧 Challenges We Ran Into
- **Windows cmd.exe Shell Escaping:** Running nested string evaluations across cross-platform shells triggered subtle quotation traps. We resolved this by engineering clean `node -e` vector execution without shell wrapping.
- **Buffer Block-Buffering:** Capturing unbuffered output streams from child processes required enforcing unbuffered non-TTY flags (`FORCE_COLOR=1`).
- **Zero-Dependency Mandate:** To ensure that hackathon judges and reviewers can run the demo immediately without running `npm install`, we built both the CLI autopsy demo (`src/demo.js`) and the HTTP server (`src/serve.js`) using 100% native Node.js standard library modules.

---

## 🏆 Accomplishments We're Proud Of
- **84ms Self-Healing Loop:** From crash detection to patch formulation and resurrection, the loop resolves in under 100 milliseconds.
- **Zero-Dependency Portability:** Anyone can run `node src/demo.js` or `node src/serve.js` out-of-the-box.
- **Full `.kiro` Compliance:** 100% adherent to the official Kiroween rules requiring root `/.kiro` architectural integration.

---

## 📚 What We Learned
How Kiro's configuration scopes (`specs/`, `steering/`, `hooks/`) transform passive code generators into deterministic, context-aware autonomous agent workflows.

---

## 🚀 What's Next for Frankenstein
- Live Language Server Protocol (LSP) integration for multi-file AST refactoring.
- WebSocket streaming between the CLI PTY daemon and remote mobile dashboards.
- Pre-commit git hooks that automatically self-heal broken test suites before commits land.
