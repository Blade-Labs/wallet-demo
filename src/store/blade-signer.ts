import type {
  AccountId,
  Transaction,
  Signer,
  Executable,
} from "@hashgraph/sdk";
import {
  TransactionReceiptQuery,
  TransferTransaction,
  TransactionId,
  AccountInfoQuery,
} from "@hashgraph/sdk";

import { defineStore } from "pinia";
import BigNumber from "bignumber.js";
import { useBalanceStore } from "./balance-store";
import { BladeSigner } from "@bladelabs/blade-web3.js";

type BladeStoreState = {
  signer: Signer | null;
  accountId: AccountId | null;
  hasSession: boolean;
};

export const useBladeStore = defineStore("blade-store", {
  state: (): BladeStoreState => ({
    signer: null,
    accountId: null,
    hasSession: false,
  }),

  actions: {
    setSigner(signer: BladeSigner | null) {
      this.signer = signer as Signer | null;
      this.accountId = (signer?.getAccountId() ?? null) as AccountId | null;
      this.hasSession = this.signer != null;

      void this.fetchMyBalance();

      signer?.onAccountChanged(() =>  {
        // TODO: do other things on account changed?
        this.accountId = this.signer?.getAccountId() ?? null;

        void this.fetchMyBalance();
      });
    },

    async getAccountBalance() {
      return this.signer?.getAccountBalance();
    },

    async getAccountInfo(accountId: AccountId | string) {
      return this.sendRequest(new AccountInfoQuery({ accountId }));
    },

    async getTransactionReceipt(transactionId: TransactionId | string) {
      return this.sendRequest(
        new TransactionReceiptQuery({ transactionId: transactionId })
      );
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

    async sendRequest<RequestT, ResponseT, OutputT>(
      request: Executable<RequestT, ResponseT, OutputT>
    ) {
      return this.signer!.sendRequest(request);
    },

    async requestSign(transaction: Transaction) {
      return await this.signer?.signTransaction(transaction);
    },

    async sendTransfer(transfer: { accountId: AccountId; amount: BigNumber }) {
      if (this.signer == null) return;

      const transaction = new TransferTransaction({
        hbarTransfers: [
          {
            accountId: transfer.accountId,
            amount: transfer.amount,
          },
          {
            accountId: this.accountId! as AccountId,
            amount: transfer.amount.negated(),
          },
        ],
      });

      const result = await this.signer.sendRequest(transaction);

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
    },
  },
});
