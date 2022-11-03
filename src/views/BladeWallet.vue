<script setup lang="ts">

  import { useBladeStore } from '@/store/blade-signer';
  import { useDemoStore } from '@/store/demo-store';

  const bladeStore = useBladeStore();
  const demoStore = useDemoStore();

  const tryReload = ()=>{
    demoStore.load();
  }

</script>


<template>
<section class="w-full h-full">
  <section class="flex flex-row justify-between space-x-5" v-if="bladeStore.hasSession">
    <div class="flex flex-col space-y-5 w-1/2">

      <wallet-account
        :account-id="bladeStore.accountId"
        :network="bladeStore.signer?.getLedgerId()?.toString()"
      />

      <form-transfer-NFT />
      <form-buy-NFT />
      <form-send-hbar />
      <form-get-receipt />


    </div>
    <div class="flex flex-col space-y-5 w-1/2">

      <network-information />
      <form-associate-token />
      <form-send-token />
      <form-call-contract />
      <form-account-info />

    </div>

  </section>
  <section v-else>
    <action-button @click="tryReload">New Session</action-button>
  </section>

</section>
</template>
