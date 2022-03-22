<script setup lang="ts">
//import ClickMask from '../static/ClickMask.vue';

</script>

<template>
  <div class="relative z-auto -top-2/4">
    <div class="spinner relative flex flex-row items-start justify-center pt-1">
      <div v-for="i in 10" :key="i" />
    </div>
  </div>
</template>

<style scoped>

.spinner div {
  border-radius: 50%;
  transform-origin: 0px 16px;
  transform-box: border-box;
  position: absolute;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: fadeIn;
  animation-direction: alternate;

  width: 4.5px;
  height: 4.5px;
  min-width: 4.5px;
  min-height: 4.5px;
}

/*.spinner div:nth-child(1){
  animation-delay: -250ms;
  background-color: #FFF;
  transform: rotate(81deg);
}*/

.spinner div:nth-child(1) {
  transform: rotate(15deg);
  animation-delay: 0ms;
  background-color: white;
}
.spinner div:nth-child(2) {
  transform: rotate(60deg);
  animation-delay: 160ms;
  background-color: white;
}
.spinner div:nth-child(3) {
  transform: rotate(105deg);
  animation-delay: 320ms;
  background-color: white;
}
.spinner div:nth-child(4) {
  transform: rotate(150deg);
  animation-delay: 480ms;
 background-color: white;
}
.spinner div:nth-child(5) {
  transform: rotate(195deg);
  animation-delay: 640ms;
   background-color: white;
}
.spinner div:nth-child(6) {
  transform: rotate(240deg);
  animation-delay: 800ms;
   background-color: white;
}
.spinner div:nth-child(7) {
  transform: rotate(285deg);
  animation-delay: 960ms;
  background-color: white;
}
.spinner div:nth-child(8) {
  transform: rotate(325deg);
  animation-delay: 1120ms;
  background-color: white;
}


@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  85% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}
</style>
