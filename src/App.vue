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
        
        <div>
          Install
          <a href="https://www.bladewallet.io/"
            class="text-basePurple visited:opacity-80 text-xl"
           target="_blank">Blade Wallet</a>
          Extension to use Demo
        </div>
        <div class="pt-4">Blade Wallet Not Found.</div>
      </div>


    </div>

</template>
