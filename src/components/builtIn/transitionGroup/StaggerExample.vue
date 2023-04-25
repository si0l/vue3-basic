<script setup>
import { computed, ref } from 'vue'

const list = [{ val: 'a;lskdgj' }, { val: 'alskdhfn' }, { val: 'fbmoer' }, { val: 'qwmroij' }, { val: 'c;lmi43' }]
const query = ref('')
const computedLsit = computed(() => list.filter((item) => item.val.toLowerCase().includes(query.value)))
</script>
<template>
  <h1>Transition Group</h1>
  <input v-model="query" />
  <TransitionGroup name="list">
    <li v-for="element in computedLsit" :key="element">
      {{ element.val }}
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
