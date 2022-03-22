<script setup lang="ts">

const props = defineProps<{

  label?:string,
  placeholder?:string,
  modelValue?:string,
  minlength?:number,
  maxlength?:number,
  type?:string,
  disabled?:boolean,
  required?:boolean
  
}>();

const emit = defineEmits<{
  (e:'update:modelValue', value:string):void;
}>();

// Provided by mixin
declare function elmId(name: string): string;


</script>
<template>
  <div class="flex flex-col
      text-basePurple font-semibold text-sm
      disabled:opacity-50">
    <label v-if="label!=null" :for="elmId('input')" class="pb-3">{{label}}</label>
    <input :type="type ?? 'text'" :id="elmId('input')"
      class="bg-insigniaWhite rounded-lg border-none
       max-w-text-input
       disabled:opacity-50"
      @change="emit('update:modelValue', $event.target.value )"
      :required="required"
      :value="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :minlength="minlength"
      :maxlength="maxlength">

  </div>
</template>
