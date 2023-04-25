<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({ count: 0 })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  }
}
</script>

<template>
  <h1>Reactive Test</h1>
  <button @click="increment">count is {{ state.count }}</button>
</template>
