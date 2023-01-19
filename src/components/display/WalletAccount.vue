<script setup lang="ts">
import { useBladeStore } from '@/store/blade-signer';
import type { AccountId } from '@hashgraph/sdk';

const bladeStore = useBladeStore();

defineProps<{
  accountId?: AccountId,
  network?: string,
}>();

const endSession = ()=>{
  bladeStore.setSigner(null);
  (window as any).bladeConnect.killSession();
}
</script>

<template>
<vue-section title="My Account"
            collapsible
            :open="false">
  <div class="flex flex-col space-y-2">
    <div class="flex justify-between"><div>Network:</div><div>{{network}}</div></div>
    <div class="flex justify-between">
      <div>Account ID:</div><div>{{ accountId ?? 'No id'}}</div>
    </div>
  </div>
  <wallet-balance class="my-4" />
</vue-section>
</template>
