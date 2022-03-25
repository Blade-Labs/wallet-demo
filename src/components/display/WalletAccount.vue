
<script setup lang="ts">
import { useProviderStore } from '@/store/blade-provider';
import { BladeConnectorAccount } from '../../api/blade';

const props = defineProps<{
  account:BladeConnectorAccount
}>();

  const endSession = async()=>{
    console.log(`ending session.`);
    return useProviderStore().closeSession();
  }


</script>

<template>
<vue-section title="My Account"
            collapsible
            :open="false">
  <div class="flex flex-col space-y-2">
    <div class="flex justify-between"><div>Network:</div><div>{{account?.network}}</div></div>
    <div class="flex justify-between">
      <div>Account ID:</div><div>{{account?.id ?? 'No id'}}</div>
    </div>
    <div>
      <div>Public Key:</div>
      <div class="break-words"><span>{{account?.publicKey}}</span></div>
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
