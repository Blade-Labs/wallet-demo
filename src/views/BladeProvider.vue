<script setup lang="ts">

  /**
   * Sample using legacy blade connector
   */

  import { useProviderStore } from '@/store/blade-provider';
  import {Client, AccountId, ContractExecuteTransaction, Hbar, HbarUnit} from '@hashgraph/sdk';
  import BigNumber from 'bignumber.js';
  import { BladeConnector, BladeConnectorAccount, HederaNetwork } from '../api/blade';

  const testContractId:string = '0.0.01';

  const providerStore = useProviderStore();

  const errorRef = ref<string>();
  const busy = ref<boolean>(false);

  providerStore.load();


  const myAccount = computed(()=>{
    return providerStore.account;
  });

  const newSession = async()=>{
    return providerStore.newSession();
  }

  const endSession = async()=>{
    return providerStore.closeSession();
  }
  const mockContractCall = async ()=>{

    providerStore.requestSign(
      new ContractExecuteTransaction({
        amount:Hbar.from(13, HbarUnit.Hbar),
        contractId:testContractId,
        gas:20000,
      }).setNodeAccountIds([AccountId.fromString('0.0.3')])
    );

  }

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
<section class="flex flex-row justify-between">

  <section v-if="providerStore.hasSession">
    <div class="flex flex-col space-y-5">

      <wallet-account :account="myAccount"/>
      <wallet-balance v-if="myAccount" />
      <form-send-hbar
        @submit="onSubmitTransfer"
        :busy="busy" />


    </div>
    <div class="flex flex-col space-y-5">

      <action-button @click="mockContractCall">Mock Contract Call</action-button>
      <action-button @click="endSession">Close Session</action-button>

    </div>

  </section>
  <section v-else>

    <action-button @click="newSession">New Session</action-button>

  </section>

  <div v-if="walletLoaded" class="flex flex-col space-y-6">
    <div>Wallet Loaded</div>



  </div>
  <div v-else>WALLET NOT LOADED</div>
  <div v-if="errorRef">{{errorRef}}</div>

</section>
</template>
