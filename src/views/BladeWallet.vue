<script setup lang="ts">

  import { useBladeStore } from '@/store/blade-signer';
  import { useDemoStore } from '@/store/demo-store';
  import FormSign from "@/components/forms/FormSign.vue";

  const bladeStore = useBladeStore();
  const demoStore = useDemoStore();

  const tryReload = ()=>{
    demoStore.load();
  }

</script>


<template>
<section class="flex flex-col w-full h-full">
  <div class="flex flex-row space-x-5 w-full">
    <select v-model="demoStore.network"
            v-if="!bladeStore.hasSession"
            :disabled="demoStore.isBusy"
            class="rounded-lg bg-baseGrey capitalize"
    >
      <option v-for="network in demoStore.availableNetworks" :key="network" :value="network" class="capitalize">
        {{network}}
      </option>
    </select>
    <action-button @click="tryReload" v-if="!bladeStore.hasSession" :busy="demoStore.isBusy">
      Connect
    </action-button>
    <select v-model="demoStore.account"
            @change="demoStore.onAccountChange"
            class="rounded-lg bg-baseGrey"
            v-if="bladeStore.hasSession"
            :disabled="demoStore.isBusy"
    >
      <option v-for="account in demoStore.availableAccounts" :key="account" :value="account">
        {{account}}
      </option>
    </select>
    <action-button @click="demoStore.disconnect" v-if="bladeStore.hasSession" :busy="demoStore.isBusy">
      Disconnect
    </action-button>
  </div>
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
      <form-sign />

    </div>
    <div class="flex flex-col space-y-5 w-1/2">

      <network-information />
      <form-associate-token />
      <form-send-token />
      <form-call-contract />
      <form-account-info />

    </div>
  </section>
</section>
</template>
