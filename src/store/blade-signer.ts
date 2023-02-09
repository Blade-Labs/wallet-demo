import {
  AccountId,
  Transaction,
  Executable,
  TokenId,
  TokenAssociateTransaction,
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
import { BladeSigner, HederaNetwork } from "@bladelabs/blade-web3.js";
import Long from "long";
import {useDemoStore} from "@/store/demo-store";
import {ExtendedSigner} from "@/model/signer";

type BladeStoreState = {
  signer: ExtendedSigner | null;
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
      this.signer = signer as ExtendedSigner | null;
      this.accountId = (signer?.getAccountId() ?? null) as AccountId | null;
      this.hasSession = !!this.signer && !!this.accountId;
      useDemoStore().account = this.accountId?.toString() || null;
      const ledgerId = this.signer?.getLedgerId();
      if (ledgerId) {
        useDemoStore().network = ledgerId.toString() as HederaNetwork;
      }

      signer?.onAccountChanged(() =>  {
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

    async signMessages(messages: Uint8Array[], likeHethers: boolean = false) {
      return this.signer?.sign(messages, {likeHethers});
    },

    async hbarTransfer(transfer: { accountId: AccountId; amount: BigNumber }) {
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

      const populatedTransaction = await this.signer.populateTransaction(transaction);
      const signedTransaction = await this.signer.signTransaction(populatedTransaction.freeze());
      const result = await this.signer.call(signedTransaction);

      this.fetchMyBalance();

      return result;
    },

    async tokenTransfer(transfer: {
      accountId: AccountId,
      amount: number,
      tokenId: TokenId | string
    }) {
      if (this.signer == null) return;

      const transaction = new TransferTransaction({
        tokenTransfers: [
          {
            accountId: transfer.accountId,
            amount: transfer.amount,
            tokenId: transfer.tokenId,
          },
          {
            accountId: this.accountId! as AccountId,
            amount: transfer.amount * -1,
            tokenId: transfer.tokenId,
          },
        ],
      });

      const populatedTransaction = await this.signer.populateTransaction(transaction);
      const signedTransaction = await this.signer.signTransaction(populatedTransaction.freeze());
      const result = await this.signer.call(signedTransaction);

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

      const populatedTransaction = await this.signer.populateTransaction(transaction);
      const signedTransaction = await this.signer.signTransaction(populatedTransaction.freeze());
      const result = await this.signer.call(signedTransaction);

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

      transaction.setTransactionMemo("Transaction memo");

      const populatedTransaction = await this.signer.populateTransaction(transaction);
      const signedTransaction = await this.signer.signTransaction(populatedTransaction.freeze());
      const result = await this.signer.call(signedTransaction);

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

      const populatedTransaction = await this.signer.populateTransaction(transaction);
      const signedTransaction = await this.signer.signTransaction(populatedTransaction.freeze());
      const result = await this.signer.call(signedTransaction);

      this.fetchMyBalance();

      return result;
    },

    async fetchMyBalance() {
      if (this.signer != null) {
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
