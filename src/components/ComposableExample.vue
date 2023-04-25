<script setup>
import { computed, ref } from 'vue'
import { useFetch } from './composable/fetch.js'
import { useMouse } from './composable/mouse.js'
const { x, y } = useMouse()

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'
const id = ref('1')
const url = computed(() => baseUrl + id.value)
const { data, error } = useFetch(url)
</script>

<template>
  <h1>Composable</h1>
  <p>Mouse position: {{ x }}, {{ y }}</p>
  <p>Fetched: {{ error ? error : data }}</p>
</template>
