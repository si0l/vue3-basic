<script setup>
import { ref } from 'vue'

const state = ref('state1')
const stateSecond = ref('state1')
const stateThird = ref('state1')
</script>
<template>
  <h1>Transition elements</h1>
  <Transition mode="in-out" name="modeexample2">
    <button v-if="stateThird === 'state1'" @click="() => (stateThird = 'state2')">State 1</button>
    <button v-else-if="stateThird === 'state2'" @click="() => (stateThird = 'state1')">State 2</button>
  </Transition>
  <br />
  <br />
  <Transition mode="out-in" name="modeexample">
    <button v-if="stateSecond === 'state1'" @click="() => (stateSecond = 'state2')">State 1</button>
    <button v-else-if="stateSecond === 'state2'" @click="() => (stateSecond = 'state1')">State 2</button>
  </Transition>
  <br />
  <br />
  <Transition name="slide-up">
    <button class="myButton" v-if="state === 'state1'" @click="() => (state = 'state2')">State 1</button>
    <button class="myButton" v-else-if="state === 'state2'" @click="() => (state = 'state1')">State 2</button>
  </Transition>
</template>

<style>
.myButton {
  position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.modeexample-enter-active,
.modeexample-leave-active {
  transition: all 0.25s ease-out;
}
.modeexample-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.modeexample-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.modeexample2-enter-active,
.modeexample2-leave-active {
  transition: all 0.25s ease-out;
}
.modeexample2-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.modeexample2-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>
