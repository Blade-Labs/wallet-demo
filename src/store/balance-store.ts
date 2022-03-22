import { Hbar, HbarUnit } from '@hashgraph/sdk';
import { defineStore } from 'pinia';
import { useProviderStore } from './blade-provider';
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

      console.log(`setting balance: ${balance.toString()}`);
      this.hbar = BigNumber.isBigNumber(balance) ? Hbar.from(balance, HbarUnit.Hbar) : balance;

    }

  },

});
