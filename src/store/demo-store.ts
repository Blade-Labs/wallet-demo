import { defineStore } from 'pinia';
import { useBladeStore } from './blade-signer';
import { BladeSigner, BladeWalletError } from '@bladelabs/blade-web3.js';

type DemoStoreState = {
  bladeNotFound: boolean,
}

export const useDemoStore = defineStore('demo-store', {

  state: (): DemoStoreState => ({
    bladeNotFound: false
  }),

  actions: {

    /**
     * Listen for hederaWalletLoaded event from Blade extension.
     */
    async load() {
      try {
        if (!useBladeStore().hasSession) {
          this.bladeNotFound = false;

          // Create and connect signer bridge
          const signer = new BladeSigner();
          await signer.createSession();

          signer.onWalletLocked(() => {
            useBladeStore().setSigner(null);
          });

          useBladeStore().setSigner(signer);
        }
      } catch (err) {
        useBladeStore().setSigner(null);

        if (err instanceof Error) {
          if (err.name === BladeWalletError.ExtensionNotFound) {
            this.bladeNotFound = true;
          } else if (err.name === BladeWalletError.NoSession) {
            console.warn(`No active blade session.`);
          } else if (err.message === `The user's wallet is locked.`) {
            console.warn(`User wallet is locked.`);
          } else {
            console.error(`Uncaught: ${err.message}`);
          }
        }
      }
    },

    setNotFound() {
      this.bladeNotFound = true;
    }
  },
});
