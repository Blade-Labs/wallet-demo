<script setup lang="ts">

const props = defineProps<{

  error?: string | null,
  message?: string | null
}>();

</script>


<template>
<div class="flex flex-col justify-center min-h-14">
<transition
  enter-from-class="opacity-0"
  enter-active-class="transition-opacity"
  enter-to-class="opacity-100">
  <div class="text-base transition" :class="[error ? 'text-errorRed' : null]">
    <span>{{
      error != null && error != '' ? error : (message ?? '')
    }}</span>
  </div>
</transition>
</div>
</template>
