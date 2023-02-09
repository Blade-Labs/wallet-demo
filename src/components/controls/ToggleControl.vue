<script setup lang="ts">
const props = defineProps<{
  label: string,
  modelValue: boolean,
  disabled?:boolean
}>();

const emit = defineEmits<{(e:'update:modelValue', value: string): void;}>();

</script>
<template>
  <div class="flex flex-col
      text-basePurple font-semibold text-sm
      disabled:opacity-50">
    <label class="relative inline-flex items-center cursor-pointer">
      <span class="text-sm font-medium text-gray-900 dark:text-gray-300">{{label}}</span>
      <input type="checkbox"
             :value="modelValue"
             :checked="modelValue"
             :disabled="disabled"
             @input="emit('update:modelValue', $event.target.checked )"
             class="sr-only peer">
      <div class="box-content w-11 h-6 relative border-2 mx-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-basePurple dark:peer-focus:ring-aquarellePurple rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-basePurple"></div>
    </label>
  </div>
</template>
