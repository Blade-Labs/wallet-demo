import { Hbar, HbarUnit } from '@hashgraph/sdk';
import { defineStore } from 'pinia';
import BigNumber from 'bignumber.js';

type BalanceStoreState = {
  hbar?: Hbar | null
}

export const useBalanceStore = defineStore('balance-store', {
  state: (): BalanceStoreState => ({
    hbar: null
  }),

  actions: {
    setBalance(balance: Hbar | BigNumber) {
      this.hbar = BigNumber.isBigNumber(balance) ? Hbar.from(balance, HbarUnit.Hbar) : balance;
    }
  },
});
