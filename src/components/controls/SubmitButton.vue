<script setup lang="ts">

const props = defineProps<{
  busy?:boolean,
  disabled?:boolean,
  form?:string
}>();

</script>

<template>
  <button type="submit" :disabled="disabled||busy" :form="form"
  class="bg-basePurple 
    box-content hover:box-content
    rounded-xl h-10 max-h-10 px-4.5 min-w-button-md
    disabled:opacity-20 transition-all
   hover:brightness-75
   text-white text-xs text-center font-bold uppercase">
   <spinner-small v-if="busy" />
   <slot v-else></slot>
   </button>

</template>
