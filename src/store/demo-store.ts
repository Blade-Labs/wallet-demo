import {defineStore} from 'pinia';
import {useBladeStore} from './blade-signer';
import {BladeSigner, BladeWalletError, HederaNetwork} from '@bladelabs/blade-web3.js';

type DemoStoreState = {
  bladeNotFound: boolean,
  availableAccounts: string[],
  availableNetworks: HederaNetwork[],
  network: HederaNetwork,
  account: string | null,
  connector: BladeSigner | null;
  isBusy: boolean
}

export const DEFAULT_NETWORK = HederaNetwork.Testnet;

export const useDemoStore = defineStore('demo-store', {

  state: (): DemoStoreState => ({
    bladeNotFound: false,
    availableAccounts: [],
    availableNetworks: [HederaNetwork.Testnet, HederaNetwork.Mainnet],
    network: DEFAULT_NETWORK,
    account: null,
    connector: null,
    isBusy: true
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
          this.connector = markRaw(new BladeSigner());
          this.isBusy = true;
          this.availableAccounts = await this.connector.createSession({network: this.network});

          this.connector.onWalletLocked(() => {
            useBladeStore().setSigner(null);
          });

          useBladeStore().setSigner(this.connector as BladeSigner);
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
      } finally {
        this.isBusy = false;
      }
    },
    setNotFound() {
      this.bladeNotFound = true;
    },
    onAccountChange() {
      if (this.account) {
        this.connector?.selectAccount(this.account).then(() => {
          useBladeStore().setSigner(this.connector as BladeSigner);
        });
      }
    },
    disconnect() {
      this.isBusy = true;
      this.connector?.killSession()
        .finally(() => {
          this.isBusy = false;
          this.connector = null;
          useBladeStore().setSigner(null);
        });
    }
  },
});
