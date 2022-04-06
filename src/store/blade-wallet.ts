import { AccountId, TransferTransaction, Transaction, TransactionResponse, TransactionReceipt, Provider, Wallet } from '@hashgraph/sdk';
import { defineStore } from 'pinia';
import BigNumber from 'bignumber.js';
import { useBalanceStore } from './balance-store';

type BladeStoreState = {
  wallet?: Wallet | null,
  hasSession: boolean
}

export const useBladeStore = defineStore('blade-store', {

  state: (): BladeStoreState => ({
    wallet: null,
    hasSession: false
  }),

  actions: {

    setWallet(wallet?: Wallet | null) {

      this.wallet = wallet;
      this.hasSession = this.wallet != null;

    },

    async getAccountBalance(accountId: AccountId | string) {

      return this.wallet?.getProvider().getAccountBalance(accountId);

    },

    async getAccountInfo(accountId: AccountId | string) {

      return this.wallet?.getProvider().getAccountInfo(accountId);

    },

    async sendRequest(request: Transaction) {

      return this.wallet!.sendRequest(request);
    },

    async waitReceipt(response: TransactionResponse): Promise<TransactionReceipt> {
      return this.wallet!.getProvider().waitForReceipt(response);
    },

    async requestSign(transaction: Transaction) {

      return await this.wallet?.signTransaction(transaction);

    },

    async sendTransfer(transfer: { accountId: AccountId, amount: BigNumber }) {
      const transaction = new TransferTransaction(
        {
          hbarTransfers: [{
            accountId: transfer.accountId,
            amount: transfer.amount
          },
          {
            accountId: this.accountId!,
            amount: transfer.amount.negated()
          }
          ]
        }

      );

      const result = await this.wallet!.sendRequest(transaction);
      await this.wallet?.getProvider().waitForReceipt(result!);
      this.fetchMyBalance();

      return result;

    },

    async fetchMyBalance() {

      const myAccountId = this.accountId;

      if (this.wallet != null) {

        console.log(`fetching account balance: ${myAccountId}`);
        try {
          const balance = await this.wallet.getAccountBalance();
          useBalanceStore().setBalance(balance.hbars);
        } catch (err) {
          console.warn(`$err`);
        }
      }

    }

  },
  getters: {

    provider(): Provider | undefined {
      return this.wallet?.getProvider();
    },

    accountId(): AccountId | null {
      return this.wallet?.getAccountId() ?? null;
    }
  }

});
