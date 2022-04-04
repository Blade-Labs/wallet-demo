import { AccountId, TransferTransaction, Transaction, TransactionResponse, TransactionReceipt, Provider } from '@hashgraph/sdk';
import { defineStore } from 'pinia';
import { HederaNetwork, BladeInterface } from '../api/blade';
import BigNumber from 'bignumber.js';
import { useBalanceStore } from './balance-store';
import { useDemoStore } from './demo-store';

type bladeStoreState = {
  bladeConnect?: BladeInterface,
  hasSession: boolean
}

export const useBladeStore = defineStore('blade-store', {

  state: (): bladeStoreState => ({
    bladeConnect: window.bladeConnect,
    hasSession: false
  }),

  actions: {

    setSession(session?: BladeInterface) {

      this.bladeConnect = session;
      if (session != null) {
        this.createSession();
      } else {
        useDemoStore().bladeLoaded = false;
      }

    },

    async createSession() {

      try {

        console.log(`bladeConnect: Creating Session...`);
        await this.bladeConnect?.createSession(HederaNetwork.Testnet);
        console.log(`Session ready.`);
        this.hasSession = true;
        this.fetchMyBalance();

      } catch (err) {
        this.hasSession = false;
        console.log(`start session failed: ${err}`);
      }

    },

    async killSession() {
      console.log(`blade: try close session...`);
      const result = await this.bladeConnect?.killSession();
      console.log(`close session result: ${result}`);
      if (result) {
        this.hasSession = false;
      }
      return result;
    },

    onSession() {
      this.hasSession = true;
      console.log(`Logged in using Blade Wallet Connector.`);
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

      if (this.bladeConnect?.hasSession == true && myAccountId) {

        console.log(`fetching account balance: ${myAccountId}`);
        try {
          const balance = await this.provider!.getAccountBalance(myAccountId);
          useBalanceStore().setBalance(balance.hbars);
        } catch (err) {
          console.warn(`$err`);
        }
      }

    }

  },
  getters: {

    wallet: (state) => {
      return state.bladeConnect?.getActiveWallet();
    },

    provider(): Provider | undefined {
      return this.wallet?.getProvider();
    },

    accountId(): AccountId | null {
      return this.wallet?.getAccountId() ?? null;
    }
  }

});
