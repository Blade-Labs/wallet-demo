<script setup lang="ts">

  import { useDemoStore } from './store/demo-store';

  const demoStore = useDemoStore();

</script>

<template>

    <div class="flex flex-row w-full h-full bg-darkGrey
        justify-items-stretch
        items-stretch
        text-white
        text-sm
        font-bold
        p-10">

      <div v-if="demoStore.bladeLoaded">

        <blade-provider/>

      </div>
      <div v-else>
      </div>


    </div>

</template>
