<script setup>
import { computed, reactive, ref } from 'vue'

const isActive = ref(true)
const hasError = ref(false)

const active = ref('active')
const error = ref('text-danger')
const color = reactive({
  color: 'red'
})

const classObject = computed(() => ({
  active: isActive.value && !hasError.value,
  'text-danger': hasError.value && hasError.value.type === 'fatal'
}))

function colorClick() {
  color.color = 'blue'
}
</script>

<template>
  <h1>Bind Style</h1>
  <div :class="classObject">test</div>
  <div :class="[active, error]">test2</div>
  <div :class="[{ active: isActive }, error]">test3</div>
  <div :style="color">color</div>
  <button v-on:click="colorClick">change color</button>
</template>
