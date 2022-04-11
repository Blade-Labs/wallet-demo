<script setup type="ts">


const bladeVersion = ref(
  import.meta.env.blade_api_version ?? 'Not Found'
);

</script>


<template>
  
<div class="flex flex-row px-20 py-6 text-lg items-baseline">
  <div>Blade Wallet Demo App</div>
  <div class="flex-1"></div>
  <div class="text-xs">blade-web3.js version:
    <a class="text-basePurple visited:opacity-80" 
      href="https://www.npmjs.com/package/@bladelabs/blade-web3.js">{{ bladeVersion}}</a>
  </div>
</div>
</template>
