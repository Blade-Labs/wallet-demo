# Blade Wallet Demo
This is a demo app that runs locally for testing your DApp integration with the Blade Wallet API.

**Note:** Works with only TESTNET so please use Testnet account in your Blade Wallet.

## Prerequisites

- [node](https://nodejs.org/) v16+

- [pnpm](https://pnpm.io/)

- [Latest Blade Wallet Build](https://github.com/Blade-Labs/wallet-web#installation-of-browser-extension)

## Using Blade Connect interface
For example usage and testing the below APIs using a Demo App, please go here and setup the app locally: [Demo App](https://github.com/Blade-Labs/wallet-demo)

Wallet provided by bladeConnect.getActiveWallet()
Wallet uses the [Hedera Wallet Interface](https://hips.hedera.com/hip/hip-338)

Install `bladeconnect` npm package:

`npm install --save @bladelabs/bladeconnect`

Create new wallet Object:

```
import { BladeWallet } from '@bladelabs/bladeconnect';

async function loadWallet() {

  try {

    const wallet = new BladeWallet();
    await wallet.createSession();

    /// Blade Wallet is now ready to use.

  } catch (err ){
    console.error(err);
  }

}

```


| API | Description |
| :--- | :--- |
| `bladeWallet.getAccountId()` | Get accountId of active account. |
| `bladeWallet.getAccountBalance( accountId:AccountId\|string)` |  |
| `bladeWallet.getAccountInfo( accountId:AccountId\|string)` | Get information about a Hedera account on the connected network. |
| `bladeWallet.getProvider()` | Get the **Provider** which gives access to the underlying Ledger network. |
| `bladeWallet.getAccountKey()` | Get the public key used by this wallet. |
| `bladeWallet.checkTransaction(transaction:Transaction)` | Check that a transaction is valid. |
| `bladeWallet.populateTransaction(transaction:Transaction)` | Set transaction id with active account. |
| `bladeWallet.sendRequest(request:Executable)` | Sign and execute a transaction with provider account. |
| `bladeWallet.signTransaction(transaction:Transaction)` | Sign a transaction with active wallet account. |
| `bladeWallet.getLedgerId()` | Ledger Id of the currently connected network. |
| `bladeWallet.getMirrorNetwork()` | Return array of mirror nodes for the current network. |
| `bladeWallet.getNetwork()` | Get map of nodes for the current hedera network. |


| API | Description |
| :--- | :--- |
| `provider.getAccountBalance( accountId:AccountId\|string)` | Get balance information for Hedera account.|
| `provider.getAccountInfo( accountId:AccountId\|string)` | Get information about a Hedera account on the connected network. |
| `provider.getTransactionReceipt(transactionId:TransactionId)` | Query network for receipt of a transaction. |
| `provider.waitForReceipt(response:TransactionResponse)` | Wait for a submitted transaction to resolve with a receipt. |
| `provider.getLedgerId()` | Ledger Id of the currently connected network. |
| `provider.getMirrorNetwork()` | Return array of mirror nodes for the current network. |
| `provider.getNetwork()` | Get map of nodes for the current hedera network. |



## Development

Install dependencies.

```bash
npm i
```

Run `vite` have a hot-reloaded application.

```bash
npm dev
```

**Note:** Once you have the localhost server running, you should be able to connect to the Blade Wallet installed from the GitHub or Chrome Store. In some cases, the Blade Wallet from the Chrome Store will be outdated and may not work so please use the latest build from the GitHub repository mentioned in the prerequisites above.

## Production

Run `vite build` to build and minify the application.

```bash
npm build
```

Note: App must be run in https mode to access Blade Wallet Extension.
