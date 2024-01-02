# Getting Started

## Prerequisites

* [node](https://nodejs.org/) v16+
* [Latest Blade Wallet Build](https://github.com/Blade-Labs/wallet-web#installation-of-browser-extension) v. 0.4.0 or higher.

## Using Blade Connect interface

For example usage and testing the below APIs using a Demo App, please go here and setup the app locally: [Demo App](https://github.com/Blade-Labs/wallet-demo)

BladeWallet uses the [Hedera Signer and Wallet Interface](https://hips.hedera.com/hip/hip-338)

Install `blade-web3` npm package:

`npm install --save @bladelabs/blade-web3.js`

#### Create new signer Object:

```javascript
import { BladeSigner } from '@bladelabs/blade-web3.js';

async function loadWallet() {

  try {

    const signer = new BladeSigner();

    /// Create session with WalletExtension.
    await signer.createSession();

    /// Blade Signer is now ready for use.

    signer.getAccountId();

  } catch (err ){
    console.error(err);
  }

}
```

## API

[Read the TypeDoc API documentation](https://blade-labs.github.io/blade-web3.js/)

### BladeConnector

| Method                                                 | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| `bladeConnector.createSession(params?: SessionParams)` | Create session with Blade Wallet.                        |
| `bladeConnector.killSession()`                         | Close the session with Blade Wallet.                     |
| `bladeConnector.getSigner()`                           | Get the currently active BladeSigner.                    |
| `bladeConnector.getSigners()`                          | Get a list of paired BladeSigner objects.                |
| `bladeConnector.onWalletLocked(callback)`              | Execute a callback when wallet is locked.                |
| `bladeConnector.onWalletUnlocked(callback)`            | Execute a callback when wallet is unlocked.              |
| `bladeConnector.onSessionDisconnect(callback)`         | Execute a callback when a session has been disconnected. |
| `bladeConnector.onSessionExpire(callback)`             | Execute a callback when a session has expired.           |

### BladeSigner

| Method                                                                                               | Description                                                      |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `bladeSigner.getAccountId()`                                                                         | Get accountId of active account.                                 |
| `bladeSigner.getAccountBalance(accountId: AccountId⎮string)`                                         | Retrieve account balance by accountId                            |
| `bladeSigner.getAccountInfo(accountId: AccountId⎮string)`                                            | Get information about a Hedera account on the connected network. |
| `bladeSigner.checkTransaction(transaction: Transaction)`                                             | Check that a transaction is valid.                               |
| `bladeSigner.populateTransaction(transaction: Transaction)`                                          | Set transaction id and node accounts using active account.       |
| `bladeSigner.call(request: Executable)`                                                              | Execute a transaction with provider account.                     |
| `bladeSigner.sign(message: UInt8Array[])`                                                            | Sign a transaction with active wallet account.                   |
| `bladeSigner.signTransaction(transaction: Transaction)`                                              | Sign a transaction with active wallet account.                   |
| `bladeSigner.getLedgerId()`                                                                          | Ledger Id of the currently connected network.                    |
| `bladeSigner.getMirrorNetwork()`                                                                     | Get an array of mirror nodes for the current network.            |
| `bladeSigner.getNetwork()`                                                                           | Get a map of nodes for the current hedera network.               |
| `bladeSigner.handshake(serverAccountId: string, serverSignature: string, payload: HandshakePayload)` | Make secure client-server handshake                              |

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
