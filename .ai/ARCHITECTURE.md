# Architecture — kiroween-frankenstein

```
┌─────────────────────────┐          ┌──────────────────────────┐
│ Legacy Terminal Process │ ───────▶ │ Terminal Interceptor     │
│ (stdout/stderr pipes)   │          │ (Win32 Job Object Buffer)│
└─────────────────────────┘          └────────────┬─────────────┘
                                                  │
                                                  ▼
┌─────────────────────────┐          ┌──────────────────────────┐
│ Reactive Generative UI  │ ◀─────── │ Kiro Autonomous Agent    │
│ (OKLCH, Tailwind, WebP) │          │ (Self-Healing Loop)      │
└─────────────────────────┘          └──────────────────────────┘
```
