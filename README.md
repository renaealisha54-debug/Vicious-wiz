# 🧙 Vicious Wizard

> Part of the **Vicious Suite** — AI-powered developer tools by [@renaealisha54-debug](https://github.com/renaealisha54-debug)

A dark, arcane Next.js 15 web app powered by Genkit + Gemini 2.5 Flash. Summon animated wizard and dark fairy overlays, generate AI-crafted vicious character traits and backstories, and log every arcane event in real time — all persisted locally via browser storage.

---

## ✨ Features

- **Dynamic Character Summoning** — Trigger animated wizard 🧙 and dark fairy 🧚 overlays with smooth cubic-bezier slide-in/out transitions
- **AI Trait Generator** — Genkit flow powered by Gemini 2.5 Flash generates 3–5 aggressive traits + a dark backstory for any summoned character
- **Arcane Event Log** — Real-time timestamped log of all magical triggers and interactions
- **Grimoire Persistence** — Event history saved to `localStorage` for consistent sessions
- **Sorcerer Control Hub** — Responsive card-based UI with dedicated summon and overlay controls

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| AI Runtime | [Genkit](https://firebase.google.com/docs/genkit) |
| AI Model | Gemini 2.5 Flash (`googleai/gemini-2.5-flash`) |
| Styling | Tailwind CSS |
| Fonts | Syne (headers), DM Mono (logs) |
| Persistence | Browser `localStorage` |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A [Google AI API key](https://aistudio.google.com/app/apikey) (Gemini)

### Install & Run

```bash
git clone https://github.com/renaealisha54-debug/Vicious-wiz.git
cd Vicious-wiz
npm install
```

Create a `.env.local` file:

```env
GOOGLE_GENAI_API_KEY=your_api_key_here
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To run the Genkit dev UI separately:

```bash
npx genkit start -- npx tsx dev.ts
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#080b14` (obsidian) |
| Primary accent | `#7c3aed` (neon violet) |
| Secondary accents | `#ec4899` (pink), `#fbbf24` (gold) |
| Cards | `rgba(255,255,255,0.03)` translucent overlay |
| Animations | `bob`, `shimmer`, cubic-bezier transitions |

---

## 📁 Project Structure

```
├── generate-vicious-character-traits.ts  # Genkit AI flow
├── generate-void-spell.ts                # Void spell generation flow
├── genkit.ts                             # Genkit + Google AI config
├── globals.css                           # Global styles
├── tailwind.config.ts                    # Tailwind theme
├── next.config.ts                        # Next.js config
└── .github/                              # CI/CD workflows
```

---

## 📄 License

MIT © Alisha Renae

