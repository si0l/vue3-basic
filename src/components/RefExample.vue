<script setup>
import { onMounted, ref } from 'vue'

const input = ref(null)
onMounted(() => {
  console.log(input.value)
})
</script>

<template>
  <h1>DOM Ref</h1>
  <input ref="input" />
</template>
