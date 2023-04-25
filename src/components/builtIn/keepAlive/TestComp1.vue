<script setup>
import { ref } from 'vue'
// defineProps({
//   id: {
//     type: Number,
//     required: true
//   }
// })

const value = ref('')
</script>
<template>
  <input :text="value" />
</template>
