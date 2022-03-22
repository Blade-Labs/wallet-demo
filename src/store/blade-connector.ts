import { defineStore } from 'pinia';
import { BladeConnector, BladeConnectorAccount, BladeNetworkProvider } from '../model/blade';

type ConnectorStoreState = {
  account?: BladeConnectorAccount,
  connector?: BladeConnector
}

export const useLegacyStore = defineStore('provider-store', {

  state: (): ConnectorStoreState => ({
    account: undefined,
    connector: undefined
  }),
  actions: {

    /**
     * Listen for BladeConnector defined on window.
     */
    load() {

      if (window.wallet) {
        this.onLoaded();
      } else {
        document.addEventListener('hederaWalletLoaded', this.onLoaded, { once: true });
      }

    },

    onLoaded() {

      if (window.wallet) {
        this.connector = window.wallet;
        this.login();
      }
    },

    setConnector(connector: BladeConnector) {
      this.connector = connector;
    },

    login() {
    }

  },
  getters: {

  }

});
