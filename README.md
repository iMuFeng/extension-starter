# Extension Starter

A React starter template for building WebExtensions powered by Vite.

## Features

- 🚀 Instant HMR - utilize Vite and swc during development for seamless updates without needing to refresh!
- 📧 Smooth communication - powered by [`webext-bridge`](https://github.com/antfu/webext-bridge) for effortless messaging.
- 🧩 WebExtension - an isomorphic extension that can be used on various browsers including Chrome, Microsoft Edge and Firefox.
- 🔧 Dynamic `manifest.json` with complete type support for efficient and accurate extension configuration.

## Pre-packed

### WebExtension Libraries

- [`webextension-polyfill`](https://github.com/mozilla/webextension-polyfill) - webExtension browser API Polyfill
- [`webext-bridge`](https://github.com/antfu/webext-bridge) - smooth communication between contexts

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [npm-run-all](https://github.com/mysticatea/npm-run-all) - run multiple npm-scripts in parallel or sequential
- [web-ext](https://github.com/mozilla/web-ext) - streamlined experience for developing web extensions

## Usage

### Folders

- `src` - main source.
  - `contentScript` - scripts and components to be injected as `content_script`
  - `background` - scripts for background.
  - `options` - scripts for options page.
  - `styles` - styles shared in popup and options page
  - `assets` - assets used in React components
- `manifest.config.ts` - manifest for the extension.
- `dist` - extension package root.

### Development

```bash
pnpm dev
```

Then **load extension in browser with the `dist/` folder**.

For Firefox developers, you can run the following command instead:

```bash
pnpm start:firefox
```

`web-ext` auto reload the extension when `dist/` files changed.

### Build

To build the extension, run

```bash
pnpm build
```

And then pack files under `dist`, you can upload `extension.crx` or `extension.xpi` to appropriate extension store.

## 