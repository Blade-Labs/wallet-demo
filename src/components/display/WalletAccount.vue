
<script setup lang="ts">
import { BladeConnectorAccount } from '../../api/blade';
const props = defineProps<{
  account:BladeConnectorAccount
}>();

</script>

<template>
  <div class="flex flex-col space-y-1">
    <div class="flex justify-between"><div>Account ID:</div><div>{{account?.id ?? 'No id'}}</div></div>
    <div class="flex flex-wrap items-stretch break-words flex-grow">
      <div>Public Key:</div>
      <div class="flex flex-wrap break-words"><span>{{account?.publicKey}}</span></div>
    </div>
    <div class="flex justify-between"><div>Network:</div><div>{{account?.network}}</div></div>
  </div>
</template>
