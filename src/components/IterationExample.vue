<script setup>
import { ref } from 'vue'

const items = ref([{ message: 'test1' }, { message: 'test2' }])
const obj = ref({
  field1: 'f1',
  field2: 'f2'
})
</script>

<template>
  <h1>Iteration</h1>
  <!-- can use of instead of in -->
  <li v-for="(item, index) in items" :key="index">{{ item.message }}-{{ index }}</li>

  <div v-for="field of obj" :key="field">{{ field }}</div>
  <div v-for="(field, key, index) of obj" :key="index">{{ key }}-{{ index }}-{{ field }}</div>
  <div v-for="n in 3" :key="n">{{n}}</div>
</template>
