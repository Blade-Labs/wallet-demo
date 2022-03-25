<script setup lang="ts">

import { useProviderStore } from "@/store/blade-provider";
import { LedgerId } from '@hashgraph/sdk';


const providerStore = useProviderStore();

const ledgerId = computed(()=>{

  const ledgerId = providerStore.provider?.getLedgerId();
  if ( ledgerId) {

    return `${ledgerId.toString()}`
  } else {
    return '';
  }

});

</script>

<template>
<vue-section>

  <div class="flex flex-col items-stretch">

    <div>Ledger ID:</div><div>{{LedgerId}} </div>

  </div>

</vue-section>
</template>
