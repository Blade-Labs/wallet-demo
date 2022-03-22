<script setup lang="ts">
import { mediumDateFormat } from "@/consts";

/// Simple Display Field with Label for Text and Dates

const props = defineProps<{

  label?:string,
  value?:string|Date,
  

}>();


const isString = computed(()=>props.value == null || typeof props.value ==='string');

/// Copy to clipboard
const copyValue = ()=>{

  if ( !props.value ) {

  } else if ( typeof props.value == 'string') {
    navigator.clipboard.writeText(props.value ?? '');
  } else {
    navigator.clipboard.writeText( mediumDateFormat.format(props.value))
  }
}

// Provided by mixin
declare function elmId(name: string): string;

</script>
<template>
  <div class="bg-white flex flex-col text-basePurple font-semibold text-sm">
    <label v-if="label!=null" :for="elmId('text')" class="pb-3">{{ label }}</label>

    
    <copy-item :id="elmId('text')" :value="value?.toString()" :icon="true"
      class="bg-insigniaWhite rounded-lg max-w-text-input break-words
      min-h-10 max-h-20 px-5 py-2 border-none flex flex-row justify-between items-center">
      
      <div class="w-11/12">{{ isString ? (value ?? '') : mediumDateFormat.format(value) }}</div>

    </copy-item>

  </div>
</template>
