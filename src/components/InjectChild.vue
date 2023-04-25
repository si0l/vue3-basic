<script setup>
import { inject } from 'vue'

const message = inject('message')
const message2 = inject('message2')
const titlesData = inject('titlesData')

//default
const someValue = inject('someValue', 'some value')
</script>
<template>
  <h2>Inject child</h2>
  <p>message: {{ message }}</p>
  <p>message2: {{ message2 }}</p>
  <p>titles: {{ titlesData.titles }}</p>
  <p>default value: {{ someValue }}</p>

  <button @click="titlesData.updateTitles">update titles</button>
</template>
