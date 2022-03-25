import { defineStore } from 'pinia';
import { useProviderStore } from './blade-provider';
import { walletLoadedEvent } from '../api/blade';

type DemoStoreState = {
  bladeLoaded: boolean,
  providerNotFound: boolean,
}

export const useDemoStore = defineStore('demo-store', {

  state: (): DemoStoreState => ({
    bladeLoaded: false,
    providerNotFound: false
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
        this.providerNotFound = false;
        useProviderStore().createSession();
      } else {
        this.providerNotFound = true;
      }

    },

  },

});
