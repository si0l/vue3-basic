<script setup>
import { computed, ref } from 'vue'

const a = ref(1)
const b = ref(2)

const sumNotComputed = a.value + b.value
const sumComputed = computed(() => a.value + b.value)

function recalculateSum() {
  a.value = 3
  b.value = 4
}
</script>
<template>
  <h1>Computed</h1>
  <p>sum not computed is {{ a }} + {{ b }} = {{ sumNotComputed }}</p>
  <p>sum computed is {{ a }} + {{ b }} = {{ sumComputed }}</p>

  <button v-on:click="recalculateSum">update a, b and recalculate</button>
</template>
