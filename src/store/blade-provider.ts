import { defineStore } from 'pinia';
import { BladeConnectorAccount, BladeNetworkProvider } from '../model/blade';

type ProviderStoreState = {
  account?: BladeConnectorAccount,
  provider?: BladeNetworkProvider
}

export const useProviderStore = defineStore('provider-store', {

  state: (): ProviderStoreState => ({
    account: undefined,
    provider: undefined
  }),
  actions: {

    getProvider(): BladeNetworkProvider | undefined {
      return this.provider;
    }

  },
  getters: {

  }

});
