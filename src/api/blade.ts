
declare global {
  interface Window {
    bladeConnect?: BladeInterface
  }
}


import { Query, Transaction, Wallet } from '@hashgraph/sdk';

export const walletLoadedEvent = 'hederaWalletLoaded';

export type Executable<TResponse> = Query<TResponse> | Transaction;

export enum HederaNetwork {
  Mainnet = "Mainnet",
  Testnet = "Testnet"
}

export type BladeConnectorAccount = {
  id: string,
  publicKey: string,
  network: string
}

export type BladeInterface = {

  createSession(network?: HederaNetwork): Promise<Wallet>;
  killSession(): Promise<boolean>;

  get hasSession(): boolean;
  getActiveWallet(): Wallet | null;

  addAccount(network: HederaNetwork, id: string, privateKey: string, metadata: string | null): Promise<Wallet>;

}

export type BladeWalletInterface = Wallet;
