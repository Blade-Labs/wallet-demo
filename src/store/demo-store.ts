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

      if (window.walletProvider != null) {
        console.log(`walletProvided found`);
        this.onLoaded();
      } else {
        document.addEventListener(walletLoadedEvent, this.onLoaded);
      }

    },

    onLoaded() {

      if (window.walletProvider != null) {
        this.bladeLoaded = true;
        this.providerNotFound = false;
        useProviderStore().setProvider(window.walletProvider);
      } else {
        console.log(`wallet not found`);
        this.bladeLoaded = false;
        this.providerNotFound = true;
      }

    },

  },

});
