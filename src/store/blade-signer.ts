import type { AccountId, Transaction, TransactionResponse, TransactionReceipt, Provider, Signer, Executable } from '@hashgraph/sdk';
import { TransactionReceiptQuery, TransferTransaction, TransactionId, AccountInfoQuery } from '@hashgraph/sdk';

import { defineStore } from 'pinia';
import BigNumber from 'bignumber.js';
import { useBalanceStore } from './balance-store';

type BladeStoreState = {
  signer?: Signer | null,
  hasSession: boolean
}

export const useBladeStore = defineStore('blade-store', {

  state: (): BladeStoreState => ({
    signer: null,
    hasSession: false
  }),

  actions: {

    setSigner(signer?: Signer | null) {

      this.signer = signer;
      this.hasSession = this.signer != null;

    },

    async getAccountBalance() {

      return this.signer?.getAccountBalance();

    },

    async getAccountInfo(accountId: AccountId | string) {

      return this.sendRequest(new AccountInfoQuery({ accountId }));

    },

    async getTransactionReceipt(transactionId: TransactionId | string) {

      return this.sendRequest(new TransactionReceiptQuery({ transactionId: transactionId }));


    },

    getLedgerId() {
      return this.signer?.getLedgerId();
    },

    getNetwork() {
      return this.signer?.getNetwork();
    },

    getMirrorNetwork() {
      return this.signer?.getMirrorNetwork();
    },

    async sendRequest<RequestT, ResponseT, OutputT>(request: Executable<RequestT, ResponseT, OutputT>) {
      return this.signer!.sendRequest(request);
    },

    async requestSign(transaction: Transaction) {

      return await this.signer?.signTransaction(transaction);

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

      const result = await this.signer!.sendRequest(transaction);

      this.fetchMyBalance();

      return result;

    },

    async fetchMyBalance() {

      const myAccountId = this.accountId;

      if (this.signer != null) {

        console.log(`fetching account balance: ${myAccountId}`);
        try {
          const balance = await this.signer.getAccountBalance();
          useBalanceStore().setBalance(balance.hbars);
        } catch (err) {
          console.warn(`$err`);
        }
      }

    }

  },
  getters: {

    accountId(): AccountId | null {
      return this.signer?.getAccountId() ?? null;
    }
  }

});
