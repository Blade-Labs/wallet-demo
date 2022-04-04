<script setup lang="ts">

import { useBladeStore } from "@/store/blade-connect";


const bladeStore = useBladeStore();

const ledgerIdString = computed(()=>{

  const ledgerId = bladeStore.provider?.getLedgerId();
  if ( ledgerId) {

    return `${ledgerId.toString()}`
  } else {
    return 'Not found.';
  }

});

const network = computed(()=>{

  return bladeStore.provider?.getNetwork();

});

const mirrorNetwork = computed(()=>{

  return bladeStore.provider?.getMirrorNetwork();

});

</script>

<template>
<vue-section collapsible :open="false" title="Network Information">

  <div class="flex flex-col items-stretch space-y-3">

    <div class="flex flex-row justify-between"><div>Ledger ID:</div><div>{{ledgerIdString}}</div></div>

    <div>
      <div>Network</div>
      <div v-if="network">
        <div v-for="(account,ind) in network" :key="ind">
            {{account.toString()}}
        </div>
      </div>
    </div>

    <div v-if="mirrorNetwork&&mirrorNetwork.length>0">
      <div>Mirror Network</div>
      <div>
        <div v-for="address in mirrorNetwork" :key="address">
            {{address}}
        </div>
      </div>
    </div>


  </div>

</vue-section>
</template>
