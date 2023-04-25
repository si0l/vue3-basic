<script setup>
import { ref, watch, watchEffect } from 'vue'

const question = ref('')
const answer = ref('')

watch(question, async (newQuestion) => {
  if (newQuestion.endsWith('?')) {
    answer.value = 'Retrieving'
    try {
      const result = await fetch('https://yesno.wtf/api')
      answer.value = (await result.json()).answer
    } catch (exception) {
      answer.value = 'error'
      console.log(exception)
    }
  } else {
    answer.value = 'question mark, please'
  }
})

const todoId = ref(1)
const data1 = ref(null)
const data2 = ref(null)
watch(
  todoId,
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
    data1.value = await response.json()
  },
  { immediate: true }
)

//watchPostEffect - to execute after DOM update
watchEffect(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  data2.value = await response.json()
})
</script>
<template>
  <h1>Watcher</h1>

  <p>yes or no? {{ answer }}</p>
  <input v-model="question" />

  <p>Data1: {{data1}}</p>
  <p>Data2: {{data2}}</p>
</template>
