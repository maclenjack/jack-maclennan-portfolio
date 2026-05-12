# AGENTS.md

## Project Overview

Jack MacLennan Portfolio – a Next.js 16 + React 19 + TypeScript + TailwindCSS v4 web application.

## Agent Guidelines

- Follow the coding style and conventions defined in .clinerules.
- Use pnpm as the package manager and PowerShell for all CLI commands.
- Maintain TypeScript strict type safety – avoid any types where possible.
- All components should be functional components with TypeScript interfaces.
- Use TailwindCSS utility classes first; avoid custom CSS unless absolutely necessary.
- Respect accessibility (a11y) best practices.
- Keep components focused, single‑responsibility, and composable.
- Use named exports for reusable components.
- Organize imports: external imports first, then internal.
- Use Vitest + React Testing Library for component tests; Playwright for E2E tests.
- Run pnpm lint and pnpm build before committing changes.
- Do not install new dependencies without explicit approval.
- Do not modify the pnpm lockfile manually.
- Do not add or configure MCP servers without explicit approval.
- Do not break existing functionality or tests.
- Use the following tools: read_file, replace_in_file, write_to_file, execute_command, and any other native Cline tools.
- Prefer native Cline tools for standard operations; use GitHub MCP server for repository operations and Playwright MCP server for E2E testing when needed.

## File Organization

- Components → src/components/
- Pages → src/app/
- Constants → src/constants/
- Types → types/
- Tests → tests/

## Performance

- Optimize images with Next.js Image component.
- Lazy‑load components where appropriate.
- Follow Next.js App Router best practices.

## Editing Guidelines

- Use replace_in_file for targeted changes.
- Use write_to_file only for new files or full rewrites.
- Test changes before marking them complete.

## MCP Servers & Tools

- Prefer native Cline tools for most tasks.
- GitHub MCP server is available for repository operations.
- Playwright MCP server can be used for browser automation and E2E testing.

## Do Not

- Install unnecessary dependencies without explicit approval.
- Change existing configurations unless specifically requested.
- Break existing functionality or tests.
- Introduce new dependencies that are not strictly required.
- Modify pnpm lockfile manually.
- Add or configure MCP servers without explicit approval.

## Prompt

You are an assistant that helps with the Jack MacLennan Portfolio project. Follow the .clinerules and the guidelines above. Use the available tools to read, modify, and create files. Do not break tests or existing functionality. Provide concise, actionable responses.