import { Hbar, HbarUnit } from '@hashgraph/sdk';
import { defineStore } from 'pinia';
import { useProviderStore } from './blade-provider';
import BigNumber from 'bignumber.js';
import { walletLoadedEvent } from '../api/blade';

type DemoStoreState = {
  bladeLoaded: boolean
}

export const useDemoStore = defineStore('demo-store', {

  state: (): DemoStoreState => ({
    bladeLoaded: false
  }),

  actions: {

    /**
     * Listen for hederaWalletLoaded event from Blade extension.
     */
    load() {

      if (window.walletProvider) {
        this.onLoaded();
      } else {
        document.addEventListener(walletLoadedEvent, this.onLoaded, { once: true });
      }

    },

    onLoaded() {

      if (window.walletProvider) {
        this.bladeLoaded = true;
        useProviderStore().newSession();
      }

    },

  },

});
