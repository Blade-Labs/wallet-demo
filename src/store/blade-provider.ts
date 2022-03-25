import { Client, AccountId, TransferTransaction, Transaction } from '@hashgraph/sdk';
import { defineStore } from 'pinia';
import { BladeNetworkProvider, HederaNetwork } from '../api/blade';
import BigNumber from 'bignumber.js';
import { useBalanceStore } from './balance-store';

type ProviderStoreState = {
  provider?: BladeNetworkProvider,
  hasSession: boolean
}

export const useProviderStore = defineStore('provider-store', {

  state: (): ProviderStoreState => ({
    provider: undefined,
    hasSession: false
  }),

  actions: {

    onLoaded() {

      if (window.walletProvider) {
        this.provider = window.walletProvider;
        this.createSession();
      } else {
        console.log(`Wallet provider not found...`);
      }
    },

    async createSession() {

      try {

        this.provider?.on('connect', this.onSession);
        await this.provider?.createSession(HederaNetwork.Testnet);
        this.fetchMyBalance();

      } catch (err) {
        this.hasSession = false;
      }

    },

    async closeSession() {
      const result = await this.provider?.closeSession();
      if (result) {
        this.hasSession = false;
      }
      return result;
    },

    onSession() {
      this.hasSession = true;
      console.log(`Logged in using Blade Wallet Provider.`);
    },

    async getAccountBalance(accountId: AccountId | string) {

      return this.provider?.getAccountBalance(accountId);

    },

    async getAccountInfo(accountId: AccountId | string) {

      return this.provider?.getAccountInfo(accountId);

    },

    async requestSign(transaction: Transaction) {

      return await this.provider?.signTransaction(transaction);

    },

    async sendTransfer(transfer: { accountId: AccountId, amount: BigNumber }) {
      const transaction = new TransferTransaction(
        {
          hbarTransfers: [{
            accountId: transfer.accountId,
            amount: transfer.amount
          },
          {
            accountId: this.account!.id,
            amount: transfer.amount.negated()
          }
          ]
        }

      );

      const result = await this.provider?.sendTransaction(transaction);
      await this.provider?.waitForReceipt(result!);
      this.fetchMyBalance();

      return result;

    },

    async fetchMyBalance() {

      if (this.provider && this.provider.account) {

        console.log(`gettingmy account balance: ${this.provider.account.id}`);
        try {
          const balance = await this.provider.getAccountBalance(this.provider.account!.id);
          useBalanceStore().setBalance(balance.hbars);
        } catch (err) {
          console.warn(`$err`);
        }
      }

    }

  },
  getters: {

    account: (state) => {
      return state.provider?.account;
    }
  }

});
