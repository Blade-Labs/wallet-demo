<script setup lang="ts">

  /**
   * Sample using legacy blade connector
   */

  import { useLegacyStore } from '@/store/blade-connector';
  import {Client} from '@hashgraph/sdk';
  import { BladeConnectorAccount } from '../model/blade';

  const connectorStore = useLegacyStore();
  connectorStore.load();

  const walletLoaded = ref<boolean>(false);
  const accountRef = ref<BladeConnectorAccount>();
  const errorRef = ref<string>();


</script>


<template>
<div class="bg-baseGrey">
    <div v-if="walletLoaded">
      <div>Wallet Loaded</div>
      <wallet-account :account="accountRef"/>
    </div>
    <div v-else>WALLET NOT LOADED</div>
    <div v-if="errorRef">{{errorRef}}</div>
</div>
</template>
