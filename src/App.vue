<script setup lang="ts">
  import {useBladeStore} from "@/store/blade-signer";
  import { onMounted } from "vue";
  import { useDemoStore } from './store/demo-store';

  const demoStore = useDemoStore();
  const bladeStore = useBladeStore();
  onMounted(async () => await demoStore.load());
</script>

<template>
<div class="flex flex-col items-stretch text-white bg-darkGrey">
    <blade-title />
    <div class="flex flex-row w-full h-full bg-darkGrey
      justify-items-stretch
      items-stretch
      text-sm
      font-bold
      px-10 pb-10">

      <blade-wallet v-if="!demoStore.bladeNotFound" />
      <div v-else>
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
</div>
</template>
