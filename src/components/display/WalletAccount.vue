
<script setup lang="ts">
import { Wallet } from '@hashgraph/sdk';

import { useBladeStore } from '@/store/blade-connect';

const props = defineProps<{
  wallet:Wallet
}>();


const network = computed(()=>{

  return props.wallet.getLedgerId()?.toString()
});

const endSession = async()=>{
  return useBladeStore().killSession();
}

</script>

<template>
<vue-section title="My Account"
            collapsible
            :open="false">
  <div class="flex flex-col space-y-2">
    <div class="flex justify-between"><div>Network:</div><div>{{network}}</div></div>
    <div class="flex justify-between">
      <div>Account ID:</div><div>{{ wallet.getAccountId() ?? 'No id'}}</div>
    </div>
    <div>
      <div>Public Key:</div>
      <div class="break-words"><span>{{ wallet.getAccountKey()}}</span></div>
    </div>
  </div>
  <wallet-balance class="my-4" />
  <div class="flex flex-row justify-end mt-3">
    <action-button @click="endSession">
      Close Session
    </action-button>
  </div>
</vue-section>
</template>
