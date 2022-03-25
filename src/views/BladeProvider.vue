<script setup lang="ts">

  import { useProviderStore } from '@/store/blade-provider';
  import { AccountId, ContractExecuteTransaction, Hbar, HbarUnit} from '@hashgraph/sdk';
  import { BladeConnector, BladeConnectorAccount, HederaNetwork } from '../api/blade';

  const testContractId:string = '0.0.01';

  const providerStore = useProviderStore();

  const myAccount = computed(()=>{
    return providerStore.account;
  });

  const createSession = async()=>{
    console.log(`trying to create session.`);
    return providerStore.createSession();
  }

  const endSession = async()=>{
    console.log(`ending session.`)
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

</script>


<template>
<section class="w-full h-full">

  <section class="flex flex-row justify-between space-x-5" v-if="providerStore.hasSession">
    <div class="flex flex-col space-y-5 w-1/2">

      <wallet-account :account="myAccount"/>
      <wallet-balance v-if="myAccount" />
      <form-send-hbar />
      <form-get-receipt />


    </div>
    <div class="flex flex-col space-y-5 w-1/2">

      <action-button @click="endSession">Close Session</action-button>
      <action-button @click="mockContractCall">Mock Contract Call</action-button>
      <network-information />
      <form-call-contract />

    </div>

  </section>
  <section v-else>

    <action-button @click="createSession">New Session</action-button>

  </section>

</section>
</template>
