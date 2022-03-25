<script setup lang="ts">

const props = defineProps<{
  busy?:boolean,
  disabled?:boolean
}>();

</script>

<template>
  <button
  :disabled="disabled"
  class="bg-basePurple rounded-full w-8 h-8
  flex flex-row items-center justify-center
   text-white text-xs text-center font-bold uppercase
   transition-all
   hover:brightness-80
   disabled:opacity-50"
   type="button">
   <slot></slot>
   </button>
</template>
