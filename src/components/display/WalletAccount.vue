
<script setup lang="ts">
import { useBladeStore } from '@/store/blade-signer';
import type { Signer } from '@hashgraph/sdk';

const bladeStore = useBladeStore();
const props = defineProps<{
  signer:Signer
}>();

const network = computed(()=>{

  return props.signer.getLedgerId()?.toString()
});

const endSession = ()=>{
  bladeStore.setSigner(null);
}

</script>

<template>
<vue-section title="My Account"
            collapsible
            :open="false">
  <div class="flex flex-col space-y-2">
    <div class="flex justify-between"><div>Network:</div><div>{{network}}</div></div>
    <div class="flex justify-between">
      <div>Account ID:</div><div>{{ signer.getAccountId() ?? 'No id'}}</div>
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
