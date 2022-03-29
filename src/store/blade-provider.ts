import { AccountId, TransferTransaction, Transaction, TransactionResponse, TransactionReceipt } from '@hashgraph/sdk';
import { defineStore } from 'pinia';
import { BladeNetworkProvider, HederaNetwork } from '../api/blade';
import BigNumber from 'bignumber.js';
import { useBalanceStore } from './balance-store';
import { useDemoStore } from './demo-store';

type ProviderStoreState = {
  provider?: BladeNetworkProvider,
  hasSession: boolean
}

export const useProviderStore = defineStore('provider-store', {

  state: (): ProviderStoreState => ({
    provider: window.walletProvider,
    hasSession: false
  }),

  actions: {

    setProvider(provider?: BladeNetworkProvider) {

      this.provider = provider;
      if (provider != null) {
        this.createSession();
      } else {
        useDemoStore().bladeLoaded = false;
      }

    },

    async createSession() {

      try {

        console.log(`bladeProvider: Creating Session...`);
        this.provider?.on('connect', this.onSession);
        await this.provider?.createSession(HederaNetwork.Testnet);
        console.log(`Session ready.`);
        this.hasSession = true;
        this.fetchMyBalance();

      } catch (err) {
        this.hasSession = false;
        console.log(`start session failed: ${err}`);
      }

    },

    async closeSession() {
      console.log(`provider store: try close session...`);
      const result = await this.provider?.closeSession();
      console.log(`close session result: ${result}`);
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

    async sendRequest(request: Transaction) {

      return this.provider!.sendRequest(request);
    },

    async waitReceipt(response: TransactionResponse): Promise<TransactionReceipt> {
      return this.provider!.waitForReceipt(response);
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

        console.log(`fetching account balance: ${this.provider.account.id}`);
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
