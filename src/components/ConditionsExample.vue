<script setup>
import { ref } from 'vue'

const awsome = ref('true')
</script>

<template v-if="awsome">
  <h1 v-if="awsome">Conditions</h1>
  <div v-if="false"></div>
  <div v-else>if-else</div>

  <div v-if="false"></div>
  <div v-else-if="awsome">else-if</div>
  <div v-show="awsome">show</div>
</template>
