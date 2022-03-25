<script setup lang="ts">

  import { useDemoStore } from './store/demo-store';

  const demoStore = useDemoStore();
  demoStore.load();

</script>

<template>

    <div class="flex flex-row w-full h-full bg-darkGrey
        justify-items-stretch
        items-stretch
        text-white
        text-sm
        font-bold
        p-10">


      <blade-provider v-if="demoStore.bladeLoaded" />
      <div v-else-if="demoStore.providerNotFound">
        Blade Wallet Provider Not Found.
      </div>


    </div>

</template>
