import { defineStore } from 'pinia';
import { useBladeStore } from './blade-wallet';
import { BladeWallet, BladeWalletError } from 'bladeconnect';

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
    async load() {

      console.log(`attempting blade wallet load...`);
      try {

        const wallet = new BladeWallet();
        await wallet.connect();

        useBladeStore().setWallet(wallet);
        this.bladeLoaded = true;
        this.bladeNotFound = false;

      } catch (err) {

        if (err instanceof Error) {

          if (err.name === BladeWalletError.ExtensionNotFound) {

            console.log(`blade extension not found.`);
            this.bladeNotFound = true;
            // recheck for blade extension.
            setTimeout(() => this.load(), 500);

          } else if (err.name === BladeWalletError.NoSession) {
            console.warn(`No active blade session.`);
          }

        } else {
          console.error(err);
          this.bladeNotFound = true;
        }

      }

    }

  },

});
