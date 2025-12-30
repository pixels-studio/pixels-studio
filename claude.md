# Claude Instructions (Astro + Svelte Website)

## Tech Stack

- Astro (primary framework)
- TypeScript
- Svelte 5 (runes-based components)
- Tailwind CSS v4
- GSAP (v3)

## Canonical Documentation (Source of Truth)

Use these docs when generating or modifying code.
If there is any conflict with prior knowledge, follow these docs.

- **Astro**
  [https://docs.astro.build/](https://docs.astro.build/)

- **TypeScript**
  [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)

- **Svelte 5 (runes)**
  [https://svelte.dev/docs/svelte/overview](https://svelte.dev/docs/svelte/overview)
  Rules:

  - Use runes (`$state`, `$props`, `$effect`)
  - Do **not** use Svelte 3/4 syntax (`export let`, `$:`)

- **Tailwind CSS v4**
  [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
  Rules:

  - Follow v4 conventions
  - Prefer utility-first styling
  - Avoid deprecated config or plugin APIs

- **GSAP**
  [https://gsap.com/docs/](https://gsap.com/docs/)
  [https://gsap.com/docs/v3/Plugins/ScrollTrigger/](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

## Goals

- Build a fast, SEO-friendly, accessible website.
- Minimize shipped JavaScript.
- Keep code maintainable and explicit.

## Architecture Rules

- Use Astro (`.astro`) for pages and layout.
- Use Svelte **only** for interactive islands.
- Default to static/server rendering.
- Hydration rules:

  - Prefer `client:visible` or `client:idle`
  - Use `client:load` only when required

- Avoid global state unless unavoidable.

## TypeScript Rules

- Type all props, exports, and public functions.
- Avoid `any`; prefer `unknown` with narrowing.
- Explicit return types for utilities.
- Keep types close to usage.

## Styling Rules (Tailwind)

- Tailwind-first; avoid custom CSS unless simpler.
- Use semantic HTML + utilities.
- Use design tokens from Tailwind config.
- Respect responsive and dark-mode patterns.
- Use flex, grid for layout.

## Svelte Rules

- Use Svelte only for interaction logic.
- Keep components small and focused.
- Prefer props + events over shared stores.
- Browser-only logic must:

  - Run inside `onMount`
  - Guard `window` / `document` usage

## GSAP Rules

- Use GSAP only when CSS is insufficient.
- Prefer timelines for complex sequences.
- Always clean up:

  - Use `gsap.context()`
  - Call `ctx.revert()` on destroy

- If using ScrollTrigger:

  - Kill triggers on teardown

- Respect `prefers-reduced-motion`.
- Anim
