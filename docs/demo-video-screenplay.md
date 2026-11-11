# 🎃 Project Frankenstein: YouTube Demonstration Video Screenplay

**Target Length:** ~2 minutes 15 seconds (Official Rule: strictly < 3:00)  
**Track:** Frankenstein (*"Stitch together technologies that don't usually work together"*)  
**Hackathon:** Kiroween 2026 ([kiroween.devpost.com](https://kiroween.devpost.com/))  
**Author:** Aman Suryavanshi ([@amansuryavanshi2002](https://devpost.com/amansuryavanshi2002))  
**Recommended Tool:** OBS Studio, Loom, or CleanShot X (1080p, 60fps)

---

## 🎬 2-Column Audio/Visual (AV) Screenplay

| Timestamp | Visual (Screen Recording / Actions) | Audio (Voiceover Script) |
| :--- | :--- | :--- |
| **0:00 – 0:20** | **Terminal in full screen.**<br>Run a script that abruptly crashes with a hideous unhandled `TypeError: Cannot read properties of undefined (reading 'token')`. Red error text dumps everywhere. | *"Every developer knows this sinking feeling: your build fails, your microservice crashes, and your terminal spits out an unhelpful, cryptic wall of text. The terminal is a 50-year-old archaic abstraction—pure text in, pure text out. When things break, it’s a dead end."* |
| **0:20 – 0:45** | **Switch to title slide or README.**<br>Show the Mermaid Architecture Diagram in `README.md` highlighting the bridge between "Archaic CLI" and "Generative UI". | *"For the Kiroween 2026 Hackathon under the Frankenstein track, I built **Project Frankenstein**. We stitched together two technologies that were never meant to coexist: 50-year-old low-level POSIX standard stream pipes and modern, reactive Generative UI resurrection widgets—powered by the autonomous Kiro agent engine."* |
| **0:45 – 1:15** | **Terminal: Run `npm run demo`**<br>Watch the 4-phase resurrection loop run in real time.<br>Highlight the "84ms" turnaround timestamp on screen. | *"Watch this: here’s our standalone CLI demo running with zero external dependencies. Phase 1: an unhandled process crashes. Phase 2: Frankenstein intercepts the raw stream descriptors and performs an AST error autopsy. Phase 3: Kiro formulates a verified hot patch. Phase 4: the process re-executes and passes with Exit Code 0—all in just 84 milliseconds."* |
| **1:15 – 1:45** | **Browser: Open `http://localhost:3033`**<br>Click **Node.js (TypeError)** chip, then click **Rust (Borrow Checker)**, then **Go (Nil Pointer)**.<br>Show the SSE live stream and click **"⚡ Apply Patch & Resurrect"**.<br>The card turns glowing green with Exit 0. | *"Now let’s take it to the web. This is our live Frankenstein Generative UI dashboard, streaming ANSI terminal output via Server-Sent Events. Frankenstein diagnoses across multiple runtimes—from Node.js to Python tensor mismatches, Rust borrow checker panics, and Go nil pointer dereferences. With a single click on the resurrection card, Kiro applies the patch and resurrects the service in real time."* |
| **1:45 – 2:05** | **IDE: Show `/.kiro` root folder**<br>Open `.kiro/specs/project-spec.md` and `.kiro/steering/default.md`.<br>Briefly switch to GitHub browser tab showing the green CI badge (`test: passing`). | *"Under the hood, Frankenstein strictly adheres to Kiroween’s rules. Our root `/.kiro` directory contains explicit feature specs and steering directives that guide Kiro to formulate non-destructive patches. Everything is verified with automated tests passing on GitHub Actions across Node 20 and 22."* |
| **2:05 – 2:20** | **Return to Dashboard or GitHub page.**<br>Show `AmanSuryavanshi-1/kiroween-frankenstein`. | *"Project Frankenstein turns terminal errors from a frustrating crash into an autonomous, self-healing generative experience. Thank you, and happy Kiroween!"* |

---

## 🎙️ Recording Tips for Maximum Presentation Score (20% of judging criteria)

1. **Resolution:** Set display scaling to 100% or 125% so terminal and code font sizes are crisp and readable on 1080p mobile screens.
2. **Audio:** Use a clean microphone with noise cancellation; speak with steady pacing and enthusiasm.
3. **No Dead Air:** Rehearse the commands once beforehand so there is zero pausing between terminal switches and browser clicks.
4. **Commands to have open in tabs:**
   - **Tab 1 (Terminal):** `npm run demo`
   - **Tab 2 (Terminal):** `npm run serve` (running the SSE server)
   - **Tab 3 (Browser):** `http://localhost:3033`
   - **Tab 4 (Browser):** `https://github.com/AmanSuryavanshi-1/kiroween-frankenstein`
