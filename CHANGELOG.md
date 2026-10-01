# Changelog

## Unreleased

- Fix: the top and bottom bars no longer use `100dvw`, which counts a classic scrollbar and
  pushed them past the right bar and under the scrollbar. They now span between the side bars
  from their `left`/`right` insets. The side bars likewise drop `height: 100dvh` and follow
  `top`/`bottom`, so they end exactly where the bottom bar sits. With overlay scrollbars
  nothing moves; with classic scrollbars the overlap that showed through a translucent
  `borderColor` is gone.
- Remove the leftover `content: '""'` from the corner pieces; it did nothing on a real element.
- `require()` now resolves `index.d.cts`, so TypeScript under `node16`/`nodenext` sees CommonJS
  types for the CommonJS entry. `react-page-border/package.json` is exported.
- `engines.node` relaxed from `>=20.20.2` to `>=18`; the published code has no Node-specific
  requirement, and CI loads both entries on Node 18 and 20.
- The component stays free of `"use client"`: it has no hooks, state or handlers, so it renders
  as a React Server Component.
