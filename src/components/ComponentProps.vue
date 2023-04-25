<script setup>
// const props = defineProps(['title'])//possible as array
const props = defineProps({
  title: String
})

const emits = defineEmits(['enlarge-text', 'reduce-text']) // optional declaration
let count = 1
if (count === 1) {
  count++
  emits('enlarge-text')
}
console.log(props.title)
</script>

<template>
  <div>
    <h1>Props: {{ title }}</h1>

    <button @click="$emit('enlarge-text')">bigger text</button>
    <button @click="$emit('reduce-text')">smaller text</button>
    <br />
    <slot />
  </div>
</template>
