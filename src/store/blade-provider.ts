import { Client, AccountId, TransferTransaction } from '@hashgraph/sdk';
import { defineStore } from 'pinia';
import { BladeConnectorAccount, BladeNetworkProvider, HederaNetwork } from '../model/blade';
import BigNumber from 'bignumber.js';
import { useBalanceStore } from './balance-store';

type ProviderStoreState = {
  provider?: BladeNetworkProvider,
  loaded: boolean
}

export const useProviderStore = defineStore('provider-store', {

  state: (): ProviderStoreState => ({
    provider: undefined,
    loaded: false
  }),
  actions: {

    /**
    * Listen for HederaNetworkProvider defined on window.
    */
    load() {
      console.log(`waiting for hederaWalletLoaded()`);
      if (window.walletProvider) {
        this.onLoaded();
      } else {
        document.addEventListener('hederaWalletLoaded', this.onLoaded, { once: true });
      }

    },

    onLoaded() {

      if (window.walletProvider) {
        console.log(`provider found.`);
        this.provider = window.walletProvider;
        this.login();
      } else {
        console.log(`wallet provider not found...`);
      }
    },

    async login() {
      this.provider?.on('connect', this.onLogin);
      await this.provider?.createSession(HederaNetwork.Testnet);
      this.fetchMyBalance();
    },

    onLogin() {
      console.log(`Logged in using Blade Provider.`);
      this.loaded = true;
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
