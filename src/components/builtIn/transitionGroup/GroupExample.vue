<script setup>
import { ref } from 'vue'

const elements = ref([3, 4, 5, 6])
const addItem = () => {
  if (elements.value.length < 1) {
    elements.value.push(1)
  } else {
    elements.value.splice(0, 0, Math.max(...elements.value) + 1)
  }
}
const removeItem = () => {
  elements.value.pop()
}
</script>
<template>
  <h1>Transition Group</h1>
  <button @click="addItem">add</button>
  <button @click="removeItem">remove</button>
  <TransitionGroup name="list">
    <li v-for="element in elements" :key="element">
      {{ element }}
    </li>
  </TransitionGroup>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: transiteX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
