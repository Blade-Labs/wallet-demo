
<script setup lang="ts">

const props = defineProps<{

  onSubmit?:()=>Promise<void>,
  canSubmit?:()=>Promise<boolean>,
  submitText?:string,
  name?:string,
  error?:string

}>();

const busy = ref<boolean>(false);
const errorMessage = ref<string>();

const trySubmit = async ()=>{

  try {

    errorMessage.value=undefined;

    busy.value=true;
    await props.onSubmit?.();

  } catch (err){

    errorMessage.value= props.error ?? `${err}`;
  }finally {
    busy.value=false;
  }

}

</script>

<template>
  <form class="flex flex-col space-y-5"
    :name="name"
    @submit.prevent="onSubmit">
    <div v-if="errorMessage!=null">{{errorMessage}}</div>
    <slot />
    <slot name="submit">
      <submit-button :disabled="props.canSubmit">{{ submitText ?? 'Submit' }}</submit-button>
    </slot>
  </form>
</template>
