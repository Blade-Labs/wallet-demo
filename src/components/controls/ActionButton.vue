<script setup lang="ts">

const props = defineProps<{
  busy?:boolean,
  disabled?:boolean
}>();

</script>

<template>
  <button
  :disabled="disabled"
  class="bg-basePurple rounded-xl h-10 max-h-10 px-2 min-w-button-md
   text-white text-xs text-center font-bold uppercase
   transition-all
   hover:brightness-80
   disabled:opacity-50"
   type="button">
   <spinner-small v-if="busy" />
   <slot v-else></slot>
   
   </button>
</template>
