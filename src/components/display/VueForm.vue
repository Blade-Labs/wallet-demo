
<script setup lang="ts">

const props = defineProps<{
  title?:string,
  onSubmit?:()=>Promise<void>,
  canSubmit?:boolean,
  submitText?:string,
  name?:string,
  error?:string

}>();

const busy = ref<boolean>(false);
const errorMessage = ref<string>();

const submittable = computed(()=>{
  return props.canSubmit ?? true;
});

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
<vue-section :title="title" :open="false" collapsible>
  <form class="flex flex-col space-y-5"
    :name="name"
    @submit.prevent="trySubmit">
      <div v-if="errorMessage!=null">{{errorMessage}}</div>
      <slot />
      <slot name="submit">
        <submit-button :busy="busy" :disabled="!submittable">
          {{ submitText ?? 'Submit' }}
        </submit-button>
      </slot>
  </form>
</vue-section>
</template>
