<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <h1>Transition</h1>
  <button @click="() => (show = !show)">Toggle</button>
  <Transition name="custom-classes" enter-active-class="animate__animated animate__tada" leave-active-class="animate__animated animate__bounceOutRight">
    <p v-if="show">Animate.css custom transition classes</p>
  </Transition>
  <Transition name="animation">
    <p v-if="show" style="text-align: center">Animation</p>
  </Transition>
  <Transition>
    <p v-if="show">Transition</p>
  </Transition>
  <Transition name="custom">
    <p v-if="show">Named transition</p>
  </Transition>
  <Transition name="slide">
    <p v-if="show">Slide transition</p>
  </Transition>
</template>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.custom-enter-active,
.custom-leave-active {
  transition: opacity 1s ease;
}
.custom-enter-from,
.custom-leave-to {
  opacity: 0.3;
}

.slide-enter-active {
  transition: all 0.3s ease-out;
}
.slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.animation-enter-active {
  animation: bounce-in 0.5s;
}
.animation-enter-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
