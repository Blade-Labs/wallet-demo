import {defineStore} from 'pinia';
import {useBladeStore} from './blade-signer';
import {BladeConnector, BladeWalletError, ConnectorStrategy, HederaNetwork} from '@bladelabs/blade-web3.js';

type DemoStoreState = {
  bladeNotFound: boolean,
  availableAccounts: string[],
  availableNetworks: HederaNetwork[],
  network: HederaNetwork,
  account: string | null,
  connector: BladeConnector | null;
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
          const connector = markRaw(await BladeConnector.init(ConnectorStrategy.EXTENSION));
          this.connector = connector;
          this.isBusy = true;
          this.availableAccounts = await this.connector.createSession({network: this.network});

          this.connector.onWalletLocked(() => {
            useBladeStore().initialize(null);
          });

          this.connector.onSessionDisconnect(() => {
            this.disconnect();
          });

          this.connector.onSessionExpire(() => {
            this.disconnect();
          });

          useBladeStore().initialize(connector);
        }
      } catch (err) {
        useBladeStore().initialize(null);

        if (err instanceof Error) {
          if (err.name === BladeWalletError.ExtensionNotFound) {
            this.bladeNotFound = true;
          } else if (err.message === `The user's wallet is locked.`) {
            console.warn(`User wallet is locked.`);
          } else {
            console.error(`Uncaught: ${err.message}`, err.stack);
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
        const store = useBladeStore();
        const signer = store.signers!.find(s => s.getAccountId().toString() === this.account);
        store.setSigner(signer!);
      }
    },
    disconnect() {
      this.isBusy = true;
      this.connector?.killSession()
        .finally(() => {
          this.isBusy = false;
          this.connector = null;
          useBladeStore().initialize(null);
        });
    }
  },
});
