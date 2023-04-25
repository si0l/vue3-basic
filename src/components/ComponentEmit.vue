<script setup>
// const emits = defineEmits(['enlarge-text']) // optional declaration
const emits = defineEmits({
  sendMessage(payload) {
    if (payload === 'hello') {
      return true
    } else {
      console.log("wrong message")
    }
  }
})
console.log(emits)
</script>

<template>
  <div>
    <h1>Emit</h1>
    <button @click="$emit('sendMessage', 'hello')">sendMessage</button>
  </div>
</template>
