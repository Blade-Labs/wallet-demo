<script setup lang="ts">

  const useBladeConnector = ref<boolean>(false);

</script>

<template>

    <div class="flex flex-row w-full h-full bg-darkGrey
        justify-items-stretch
        items-stretch
        text-white
        text-sm
        font-bold
        p-10">

      <blade-connector v-if="useBladeConnector" />
      <blade-provider v-else />

    </div>

</template>
