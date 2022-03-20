
<script setup lang="ts">
import { BladeAccount } from '../model/blade';
const props = defineProps<{
  account:BladeAccount
}>();

</script>

<template>
  <div class="flex flex-col w-dialog">
    <div class="flex justify-between"><div>Account ID:</div><div>{{account?.id ?? 'No id'}}</div></div>
    <div class="flex justify-between flex-wrap"><div>Public Key:</div><div>{{account?.publicKey}}</div></div>
    <div class="flex justify-between"><div>Network:</div><div>{{account?.network}}</div></div>
  </div>
</template>
