# react-page-border

> React component that draws a fixed, rounded border framing the entire page.

[![npm](https://img.shields.io/npm/v/react-page-border.svg)](https://www.npmjs.com/package/react-page-border)
[![license](https://img.shields.io/npm/l/react-page-border.svg)](./LICENSE)

A decorative wrapper that paints four fixed bars and four rounded corners around the viewport. Dependency-free.

🌐 **Demo:** <https://react-page-border.kkweb.io>

## Install

```bash
npm install react-page-border
```

Requires React 18 or 19.

## Usage

```tsx
import { PageBorder } from "react-page-border";

export function App() {
  return (
    <PageBorder borderColor="#f59e0b" borderSize={12} roundSize={16}>
      <YourPage />
    </PageBorder>
  );
}
```

## API

| Prop          | Type               | Required | Description                                     |
| ------------- | ------------------ | -------- | ----------------------------------------------- |
| `borderColor` | `string`           | yes      | Any CSS color.                                  |
| `borderSize`  | `string \| number` | yes      | Bar thickness (number → px).                    |
| `roundSize`   | `string \| number` | yes      | Corner radius (number → px).                    |
| `marginSize`  | `string \| number` | no       | Wrapper margin. Defaults to `borderSize`.       |
| `borderStyle` | `CSSProperties`    | no       | Extra style merged onto every bar/corner piece. |
| `zIndex`      | `number`           | no       | Stacking context for the fixed pieces.          |
| `className`   | `string`           | no       | Wrapper class.                                  |
| `style`       | `CSSProperties`    | no       | Wrapper inline style.                           |

Pieces are emitted with `data-part`: `bar-top`, `bar-right`, `bar-bottom`, `bar-left`, `corner-tl`, `corner-tr`, `corner-br`, `corner-bl`.

## License

MIT
