<script setup lang="ts">

const props = defineProps<{
  open?:boolean,
  collapsible?:boolean,
  title?:string
}>();

const canCollapse = ref<boolean>(
  (typeof props.collapsible === 'boolean') ? props.collapsible : true);

const isOpen = ref<boolean>( props.open ?? false );

const toggle = ()=>{
  isOpen.value = !isOpen.value;
}

</script>


<template>
  <section class="p-5 my-5 flex flex-col space-y-5 border-r-4 border-gray">
    <div v-if="title"
      class="flex flex-row p-2">
      <h2>{{title}}</h2>
      <button v-if="canCollapse" @click="toggle">[{{ isOpen ? '-' : '+' }}]</button>
    </div>
    <div v-show="!canCollapse||isOpen">
    <slot></slot>
    </div>
  </section>
</template>
