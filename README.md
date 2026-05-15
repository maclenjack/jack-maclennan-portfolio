This is a **Next.js 13+** project bootstrapped with `create-next-app`.
It is a personal portfolio built with **React**, **TypeScript**, and **TailwindCSS**.
The site is deployed on Vercel at https://jack-maclennan-portfolio.vercel.app/.

## Tech Stack

- **Framework**: Next.js 16
- **UI**: React 19 + TypeScript 5.9
- **Styling**: TailwindCSS 4
- **Linting / Formatting**: ESLint + Prettier + plugins
- **Testing**:
	- Unit / component tests – Vitest + React Testing Library
	- End‑to‑end tests – Playwright + Axe core
- **Documentation**: TypeDoc + plugins
- **Package Manager**: pnpm

## Getting Started

```bash
# Clone repo with submodules
git clone --recurse-submodules https://github.com/maclenjack/jack-maclennan-portfolio

# Install dependencies
npm install -g pnpm
pnpm install

# Run dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## AI & Tooling

After exhausting my monthly Copilot quota, I switched to a local LLM to keep costs low.  
I run **gpt‑oss:20b** via **Ollama** and integrate it with Copilot to unlock its agentic capabilities.

- **Model**: `gpt-oss:20b` (Ollama)
- **Integration**: Copilot + Ollama

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
