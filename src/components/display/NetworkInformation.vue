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

const network = computed(()=>{

  return providerStore.provider?.getNetwork();

});

const mirrorNetwork = computed(()=>{

  return providerStore.provider?.getMirrorNetwork();

});

</script>

<template>
<vue-section>

  <div class="flex flex-col items-stretch space-y-3">

    <div>Ledger ID:</div><div>{{LedgerId}}</div>

    <div>
      <div>Network</div>
      <div v-if="network">
        <div v-for="(account,ind) in network" :key="ind">
            {{account.toString()}}
        </div>
      </div>
    </div>

    <div>
      <div>Mirror Network</div>
      <div v-if="mirrorNetwork">
        <div v-for="address in mirrorNetwork" :key="address">
            {{address}}
        </div>
      </div>
    </div>


  </div>

</vue-section>
</template>
