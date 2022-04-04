import { defineStore } from 'pinia';
import { useBladeStore } from './blade-connect';
import { walletLoadedEvent } from '../api/blade';

type DemoStoreState = {
  bladeLoaded: boolean,
  bladeNotFound: boolean,
}

export const useDemoStore = defineStore('demo-store', {

  state: (): DemoStoreState => ({
    bladeLoaded: false,
    bladeNotFound: false
  }),

  actions: {

    /**
     * Listen for hederaWalletLoaded event from Blade extension.
     */
    load() {

      if (window.bladeConnect != null) {
        console.log(`walletProvided found`);
        this.onLoaded();
      } else {
        document.addEventListener(walletLoadedEvent, this.onLoaded);
        setTimeout(() => this.walletTimeout(), 500);

      }

    },

    /**
     * Wallet does not appear to exist.
     */
    walletTimeout() {

      if (!this.bladeLoaded) {
        this.providerNotFound = true;
      }

    },

    onLoaded() {

      if (window.bladeConnect != null) {
        this.bladeLoaded = true;
        this.bladeNotFound = false;
        useBladeStore().setSession(window.bladeConnect);
      } else {
        console.log(`wallet not found`);
        this.bladeLoaded = false;
        this.bladeNotFound = true;
      }

    },

  },

});
