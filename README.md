# Blade Wallet Demo
This is a demo app that runs locally for testing your DApp integration with the Blade Wallet API.

**Note:** Works with only TESTNET so please use Testnet account in your Blade Wallet.

## Prerequisites

- [node](https://nodejs.org/) v16+

- [pnpm](https://pnpm.io/)

- [Latest Blade Wallet Build](https://github.com/Blade-Labs/wallet-web#installation-of-browser-extension)

## Development

Install dependencies.

```bash
pnpm i
```

Run `vite` have a hot-reloaded application.

```bash
pnpm dev
```

**Note:** Once you have the localhost server running, you should be able to connect to the Blade Wallet installed from the GitHub or Chrome Store. In some cases, the Blade Wallet from the Chrome Store will be outdated and may not work so please use the latest build from the GitHub repository mentioned in the prerequisites above.

## Production

Run `vite build` to build and minify the application.

```bash
pnpm build
```

Note: App must be run in https mode to access Blade Wallet Extension.
