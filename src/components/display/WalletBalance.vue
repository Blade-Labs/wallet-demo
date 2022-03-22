<script setup lang='ts'>
import { HbarUnit } from '@hashgraph/sdk';
import { useBalanceStore } from '../../store/balance-store';

const balanceStore = useBalanceStore();

const balanceString = computed(()=>{

  return balanceStore.hbar?.toString(HbarUnit.Hbar) ?? ''

});


</script>

<template>
  <div>
    <figure>Hbar:</figure><div>{{ balanceString }}</div>
  </div>
</template>
