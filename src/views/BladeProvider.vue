<script setup lang="ts">

  import { useProviderStore } from '@/store/blade-provider';

  const providerStore = useProviderStore();

  const myAccount = computed(()=>{
    return providerStore.account;
  });

  const createSession = async()=>{
    console.log(`trying to create session.`);
    return providerStore.createSession();
  }

</script>


<template>
<section class="w-full h-full">

  <section class="flex flex-row justify-between space-x-5" v-if="providerStore.hasSession">
    <div class="flex flex-col space-y-5 w-1/2">

      <wallet-account :account="myAccount"/>
      <form-send-hbar />
      <form-get-receipt />


    </div>
    <div class="flex flex-col space-y-5 w-1/2">

      <network-information />
      <form-call-contract />
      <form-account-info />

    </div>

  </section>
  <section v-else>

    <action-button @click="createSession">New Session</action-button>

  </section>

</section>
</template>
