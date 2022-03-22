<script setup lang="ts">
import BigNumber from 'bignumber.js';

// Provided by mixin
declare function elmId(name: string): string;

/**
 * Field for entering a Token Quantity/Amount.
 */

const emit = defineEmits<{
  (e: "update:modelValue", amount: BigNumber): void;
}>();

const props = defineProps<{
  decimals?: number
  modelValue: BigNumber,
  label?: string,
  placeholder?: string
}>();

const step = computed(()=>Math.pow(10,-(props.decimals??1)));

const onChanged = (e: Event) => {
  const newValue = (<HTMLInputElement>e.target).value;
  try {
    emit("update:modelValue", new BigNumber(newValue));
  } catch (err) { }
};
</script>


<template>
  <div class="flex flex-col text-basePurple font-semibold text-sm">
    <label
      v-if="label"
      :for="elmId('amountField')"
      class="pb-2"
    >{{ label }}</label>
    <input
      class="bg-insigniaWhite rounded-lg max-w-text-input border-none
      text-left"
      :value="modelValue?.toString() ?? new BigNumber(0)"
      :placeholder="placeholder"
      @change="onChanged"
      :id="elmId('amountField')"
      :step="step"
      name="amount"
      type="number"
    />
  </div>
</template>
