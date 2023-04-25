<script setup>
import { shallowRef } from 'vue'
import TestComp1 from './TestComp1.vue'
import TestComp2 from './TestComp2.vue'

const current = shallowRef(TestComp1) //important
</script>

<template>
  <h1>KeepAlive</h1>
  <div>
    <label> <input type="radio" v-model="current" :value="TestComp1" /> c1 </label>
    <label> <input type="radio" v-model="current" :value="TestComp2" /> c2 </label>
    <KeepAlive>
      <component :is="current" />
    </KeepAlive>
  </div>
</template>
