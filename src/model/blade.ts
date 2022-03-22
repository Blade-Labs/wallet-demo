
declare global {
  interface Window {
    wallet: BladeConnector,
    walletProvider?: BladeNetworkProvider
  }
}


import { AccountId, AccountBalance, TransactionId, TransactionResponse, TransactionReceipt, AccountInfo, LedgerId, Query, Transaction } from '@hashgraph/sdk';

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


export type BladeNetworkProvider = {
  account?: BladeConnectorAccount | null | undefined;
  createSession(network?: HederaNetwork): Promise<BladeConnectorAccount>;
  closeSession(): Promise<boolean>;
  signTransaction(transaction: Transaction): Promise<string>;
  getTransactionReceipt(transactionId: TransactionId): Promise<TransactionReceipt>;
  waitForReceipt(response: TransactionResponse): Promise<TransactionReceipt>;
  sendRequest<ResponseT = TransactionResponse>(request: Executable<ResponseT>): Promise<ResponseT | TransactionResponse>;

  getAccountBalance(accountId: AccountId): Promise<AccountBalance>;
  getAccountInfo(accountId: AccountId): Promise<AccountInfo>;
  sendTransaction(transaction: Transaction): Promise<TransactionResponse>;
  getLedgerId(): LedgerId | null;
  getMirrorNetwork(): Array<string>;
  getNetwork(): { [key: string]: string | AccountId };

  on(eventName: 'connect', listener: (account: BladeConnectorAccount) => void): BladeNetworkProvider;
  on(eventName: 'disconnect', listener: () => void): BladeNetworkProvider;

}

export type BladeConnector = {

  account?: BladeConnectorAccount | null,
  login(network?: HederaNetwork): Promise<BladeConnectorAccount>,
  logout(): Promise<void>,
  addAccount(network: HederaNetwork,
    id: string,
    privateKey: string,
    metadata: string | null): Promise<BladeConnectorAccount>,
  getTransactionSigner(abis?: []): Promise<(data: Buffer) => Promise<Buffer>>

}
