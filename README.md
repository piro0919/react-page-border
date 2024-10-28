# react-page-border

react-page-border is a react component that adds rounded borders to the entire page.

## Features

- SSR support
- TypeScript support

## Installation

`npm i --save react-page-border`

## Usage

```tsx
"use client";
import PageBorder from "react-page-border";

export default function App(): JSX.Element {
  return <PageBorder>hoge</PageBorder>;
}
```

## Props

| Return      |       Type       |  Description  |
| ----------- | :--------------: | :-----------: |
| borderColor |      string      | **Required.** |
| borderSize  | string or number | **Required.** |
| children    |    ReactNode     | **Required.** |
| className   |      Object      |               |
| roundSize   | string or number | **Required.** |
