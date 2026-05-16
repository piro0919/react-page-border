# CLAUDE.md

## Project Overview

**react-page-border** draws a fixed, rounded border framing the entire page. v1.0.0 is a rewrite of the legacy 0.1.x — same look, dependency-free implementation (no `@emotion/styled`, no `style-object-to-css-string`), inline styles + CSS custom properties.

- **npm package:** react-page-border
- **Demo site:** <https://react-page-border.kkweb.io>

## Tech Stack

- React 18/19 (peers)
- TypeScript 5
- Next.js 16 (App Router) — demo site only
- tsup — library build (ESM + CJS + .d.ts)
- Vitest + Testing Library + jsdom
- ESLint flat config + Prettier
- Lefthook + Renovate

## Project Structure

```text
src/
├── index.ts
├── components/PageBorder/
│   ├── index.ts
│   └── PageBorder.tsx
└── app/                            # Next.js demo
    ├── layout.tsx
    ├── page.tsx
    └── globals.css

tests/PageBorder.test.tsx
```

## Public API

```tsx
<PageBorder borderColor="#f59e0b" borderSize={12} roundSize={16}>
  ...page content...
</PageBorder>
```

| Prop          | Type                                   | Required |
| ------------- | -------------------------------------- | -------- |
| `borderColor` | `string`                               | yes      |
| `borderSize`  | `string \| number` (number → px)       | yes      |
| `roundSize`   | `string \| number` (number → px)       | yes      |
| `marginSize`  | `string \| number`                     | no       |
| `borderStyle` | `CSSProperties` (applied to all parts) | no       |
| `zIndex`      | `number`                               | no       |
| `className`   | `string`                               | no       |
| `style`       | `CSSProperties`                        | no       |

- Renders 4 fixed bars (top/right/bottom/left) and 4 corner mask divs.
- Exposes CSS variables: `--rpb-border-color`, `--rpb-border-size`, `--rpb-round-size`.
- Each part exposes `data-part="bar-top" | "bar-bottom" | "bar-left" | "bar-right" | "corner-tl" | "corner-tr" | "corner-bl" | "corner-br"`.

## Publishing Notes

- `files: ["dist", "README.md", "LICENSE"]`.
- v1.0.0 removes `@emotion/styled` and `style-object-to-css-string` dependencies. Default export becomes a named export `{ PageBorder }`.
