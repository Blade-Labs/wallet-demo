<script setup lang="ts">

const props = defineProps<{
  open?:boolean,
  collapsible?:boolean,
  title?:string
}>();

const canCollapse = ref<boolean>(
  (typeof props.collapsible === 'boolean') ? props.collapsible : true
);

const isOpen = ref<boolean>( props.open ?? false );

const toggle = ()=>{
  isOpen.value = !isOpen.value;
}

</script>


<template>
  <section class="p-5 my-5 flex flex-col items-stretch
    space-y-5 border rounded-md border-gray">


      <div v-if="title"
        class="flex flex-row justify-between p-2 select-none" @click="toggle">
        <h2>{{title}}</h2>
        <button v-if="canCollapse"
          class="text-base">[{{ isOpen ? ' - ' : ' + ' }}]</button>
      </div>
        <transition name="grow-open"
          >

          <div v-show="!canCollapse||isOpen" class="transition-transform duration-100 origin-top overflow-clip">
            <slot></slot>
          </div>

        </transition>


  </section>
</template>


<style scoped>

.grow-open-enter-from {
  @apply scale-y-0;
  }

.grow-open-enter-to {
  @apply scale-y-100;
}

.grow-open-leave-to {
  @apply scale-y-0;
}

</style>
