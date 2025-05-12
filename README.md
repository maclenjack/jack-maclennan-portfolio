This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- It is hosted using vercel at https://jack-maclennan-portfolio.vercel.app/.
- It is written using [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/).
- It is styled using [TailwindCSS](https://tailwindcss.com/).
- Testing is done with [Playwright](https://playwright.dev/) for E2E testing and [Vitest](https://vitest.dev/) for component testing.
- Linting and formatting is done through [ESLint](https://eslint.org/) utilising a [Prettier](https://prettier.io/) plugin.
- Documentation uses [TypeDoc](https://typedoc.org/) and is located at https://github.com/maclenjack/jack-maclennan-portfolio-docs.

## Getting Started

This repo utilises a submodule for documentation which can be acquired though using the following terminal command to clone this repo and submodules:

```bash
git clone --recurse-submodules https://github.com/maclenjack/jack-maclennan-portfolio.
```

This project uses a few deprecated packages for component accessibility so pnpm is used as the package management tool.
To install pnpm and packages:

```bash
npm install -g pnpm && pnpm install
```
To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
