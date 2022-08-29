import {
  AccountId,
  Transaction,
  Signer,
  Executable,
  TokenId,
  TokenAssociateTransaction,
} from "@hashgraph/sdk";
import {
  TransactionReceiptQuery,
  TransferTransaction,
  TransactionId,
  AccountInfoQuery,
  Client,
} from "@hashgraph/sdk";

import { defineStore } from "pinia";
import BigNumber from "bignumber.js";
import { useBalanceStore } from "./balance-store";
import { BladeSigner } from "@bladelabs/blade-web3.js";
import Long from "long";

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

      signer?.onAccountChanged(() =>  {
        // TODO: do other things on account changed?
        this.accountId = this.signer?.getAccountId() ?? null;

        void this.fetchMyBalance();
      });

      void this.fetchMyBalance();
    },

    async getAccountBalance() {
      return this.signer?.getAccountBalance();
    },

    async getAccountInfo(accountId: AccountId | string) {
      return this.call(new AccountInfoQuery({ accountId }));
    },

    async getTransactionReceipt(transactionId: TransactionId | string) {
      return this.call(
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

    async call<RequestT, ResponseT, OutputT>(
      request: Executable<RequestT, ResponseT, OutputT>
    ) {
      return this.signer!.call(request);
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

      const result = await this.signer.call(transaction);

      this.fetchMyBalance();

      return result;
    },

    async nftTransfer(transfer: {
      tokenId: TokenId | string,
      sender: AccountId | string,
      recipient: AccountId | string,
      serial: Long | number
    }) {
      if (this.signer == null) {
        return;
      }

      const transaction = new TransferTransaction({
        nftTransfers: [
          {
            tokenId: transfer.tokenId,
            sender: transfer.sender,
            recipient: transfer.recipient,
            serial: transfer.serial
          },
        ],
      });

      const result = await this.signer.call(transaction);

      this.fetchMyBalance();

      return result;
    },

    async nftBuy(transfer: {
      tokenId: TokenId | string,
      accountFrom: AccountId | string,
      serial: Long | number,
      amount: BigNumber,
    }) {
      if (this.signer == null) {
        return;
      }

      const currentAccount = this.accountId! as AccountId;
      const transaction = new TransferTransaction({
        nftTransfers: [
          {
            tokenId: transfer.tokenId,
            sender: transfer.accountFrom,
            recipient: currentAccount,
            serial: transfer.serial
          },
        ],
        hbarTransfers: [
          {
            accountId: currentAccount,
            amount: transfer.amount.negated(),
          },
          {
            accountId: transfer.accountFrom,
            amount: transfer.amount,
          },
        ],
      });

      const result = await this.signer.call(transaction);

      this.fetchMyBalance();

      return result;
    },

    async tokenAssociate(params: {
      tokenId: TokenId | string,
      recipient: AccountId | string,
    }) {
      if (this.signer == null) {
        return;
      }
      
      const transaction = new TokenAssociateTransaction({
        tokenIds: [params.tokenId],
        accountId: params.recipient,
      });

      const result = await this.signer.call(transaction);

      this.fetchMyBalance();

      return result;
    },

    async fetchMyBalance() {
      const myAccountId = this.accountId;

      if (this.signer != null) {
        console.log(`fetching account balance: ${myAccountId}`);

        try {
          const balance = await this.getAccountBalance();

          if (balance) {
            useBalanceStore().setBalance(balance.hbars);
          }
        } catch (err) {
          console.warn(`$err`);
        }
      }
    },
  },
});
