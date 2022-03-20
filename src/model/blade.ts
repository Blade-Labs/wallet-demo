
import { AccountId, AccountBalance, TransactionId, TransactionResponse, TransactionReceipt, AccountInfo, LedgerId, Query, Transaction } from '@hashgraph/sdk';


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
  account?: BladeConnectorAccount | null,
  login(network?: HederaNetwork): Promise<BladeConnectorAccount>,
  logout(): Promise<void>,
  signTransaction(transaction: Transaction): Promise<TransactionResponse>


}

export type BladeConnector = {

  account?: BladeConnectorAccount | null,
  login(network: HederaNetwork): Promise<BladeConnectorAccount>,
  logout(): Promise<void>,
  addAccount(network: HederaNetwork,
    id: string,
    privateKey: string,
    metadata: string | null): Promise<BladeConnectorAccount>,
  getTransactionSigner(abis?: []): Promise<(data: Buffer) => Promise<Buffer>>

}
