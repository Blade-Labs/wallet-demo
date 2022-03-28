
<script setup lang="ts">

const props = defineProps<{
  title?:string,
  onSubmit?:()=>Promise<undefined|null|string>,
  canSubmit?:boolean,
  submitText?:string,
  name?:string,
  message?:string,
  error?:string

}>();

const busy = ref<boolean>(false);

const errorMessage = ref<string|undefined>( props.error );
const messageResult = ref<string|undefined>( props.message );

const submittable = computed(()=>{
  return props.canSubmit ?? true;
});

const trySubmit = async ()=>{

  try {

    messageResult.value = undefined;
    errorMessage.value=undefined;

    busy.value=true;
    const result = await props.onSubmit?.();

    messageResult.value = `${result}`;

  } catch (err){

    messageResult.value = undefined;
    errorMessage.value= `${err}`;
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
    
      <slot />
      <slot name="submit">
        <submit-button class="w-1/2"
          :busy="busy" :disabled="!submittable">
          {{ submitText ?? 'Submit' }}
        </submit-button>
      </slot>
      <result-message :error="errorMessage" :message="messageResult" />
  </form>
</vue-section>
</template>
