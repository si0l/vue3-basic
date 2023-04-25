<script setup>
import { computed } from 'vue'

//2 ways to define model property
const props = defineProps({
  modelValue1: String,
  modelValue2: String,
  modelValue1Modifiers: { default: () => ({}) }
})

console.log("model modifiers:" + JSON.stringify(props.modelValue1Modifiers))
const emits = defineEmits(['update:modelValue1', 'update:modelValue2'])

const emitValue = (event) => {
  const value = event.target.value
  let result
  if (props.modelValue1Modifiers.capitalize) {
    result = value.charAt(0).toUpperCase() + value.slice(1)
  } else {
    result = value + "tt"
  }
  emits('update:modelValue1', result)
}

const inputModel = computed({
  get() {
    return props.modelValue2
  },
  set(value) {
    emits('update:modelValue2', value)
  }
})
</script>

<template>
  <h1>Model</h1>
  <div>
    <input :value="modelValue1" @input="emitValue" />

    <input v-model="inputModel" />
  </div>
</template>
