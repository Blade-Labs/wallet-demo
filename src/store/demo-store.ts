import { defineStore } from 'pinia';
import { useBladeStore } from './blade-signer';
import { BladeSigner, BladeWalletError } from '@bladelabs/blade-web3.js';

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
      console.log(`Checking blade connection...`);

      try {
        if (!this.bladeLoaded) {
          console.log(`Connecting to blade...`);

          // Create and connect signer bridge
          const signer = new BladeSigner();
          await signer.createSession();

          signer.onWalletLocked(() => { 
            console.warn("Wallet locked!");
            this.bladeLoaded = false; 
          });

          useBladeStore().setSigner(signer);

          this.bladeLoaded = true;
          this.bladeNotFound = false;
        }
      } catch (err) {
        if (err instanceof Error) {
          if (err.name === BladeWalletError.ExtensionNotFound) {
            console.warn(`Blade extension not found.`);
            this.bladeNotFound = true;
          } else if (err.name === BladeWalletError.NoSession) {
            console.warn(`No active blade session.`);
          }
        } else {
          console.warn("Uncaught: ");
          console.error(err);
          this.bladeNotFound = true;
        }
      }
    },

    setNotFound() {
      this.bladeNotFound = true;
    }
  },
});
