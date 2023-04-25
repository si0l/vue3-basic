<script setup>
const vFocus = {
  mounted: (element) => element.focus()
}
</script>
<template>
  <h1>Custom Directive</h1>
  <!-- local -->
  <input v-focus />
  <!-- global -->
  <input v-log />
</template>
