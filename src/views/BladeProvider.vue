<script setup lang="ts">

  /**
   * Sample using legacy blade connector
   */

  import { useProviderStore } from '@/store/blade-provider';
  import {Client, AccountId} from '@hashgraph/sdk';
  import BigNumber from 'bignumber.js';
  import { BladeConnector, BladeConnectorAccount, HederaNetwork } from '../model/blade';

  const providerStore = useProviderStore();

  const errorRef = ref<string>();
  const busy = ref<boolean>(false);

  providerStore.load();

  const walletLoaded = computed(()=>{
    return providerStore.loaded;
  });

  const myAccount = computed(()=>{
    return providerStore.account;
  });

  const onSubmitTransfer = async ( transfer:{amount:BigNumber, accountId:AccountId})=>{

    try {

      busy.value=true;
      const result = await providerStore.sendTransfer(transfer);
      console.log(`transfer complete...`);

    } catch (err){

      errorRef.value=`${err}`;
    } finally {
      busy.value=false;
    }


  }

</script>


<template>
<div class="space-y-4">
  <div v-if="walletLoaded" class="flex flex-col space-y-6">
    <div>Wallet Loaded</div>
    <wallet-account :account="myAccount"/>
    <wallet-balance v-if="myAccount" />
    <form-send-hbar
      @submit="onSubmitTransfer"
      :busy="busy" />
  </div>
  <div v-else>WALLET NOT LOADED</div>
  <div v-if="errorRef">{{errorRef}}</div>
</div>
</template>
