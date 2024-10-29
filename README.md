# react-page-border

react-page-border is a react component that adds rounded borders to the entire page.

## Features

- SSR support
- TypeScript support

## Installation

`npm i --save react-page-border`

## Usage

```tsx
import PageBorder from "react-page-border";

export default function App(): JSX.Element {
  return (
    <PageBorder borderColor="blue" borderSize={12} roundSize={12}>
      hoge
    </PageBorder>
  );
}
```

## Props

| Return      |       Type       |  Description  |
| ----------- | :--------------: | :-----------: |
| borderColor |      string      | **Required.** |
| borderSize  | string or number | **Required.** |
| borderStyle |  CSSProperties   |               |
| children    |    ReactNode     | **Required.** |
| className   |      string      |               |
| marginSize  | string or number |               |
| roundSize   | string or number | **Required.** |
| style       |  CSSProperties   |               |
| zIndex      |      number      |               |
