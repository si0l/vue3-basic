<script setup>
import { ref } from 'vue'

const message = ref('')
const checked = ref(true)
const checkedA = ref([])
const selected = ref('')
const selectedA = ref([])
const options = ref([
  { text: 'A', value: '1' },
  { text: 'B', value: '2' },
  { text: 'C', value: '3' }
])
const slectedF = ref('')
const trimmed = ref('')
</script>
<template>
  <h1>Form</h1>
  <p>{{ message }}</p>
  <input v-model="message" placeholder="type here" />
  <br />
  <textarea v-model="message"></textarea>
  <br />
  <input type="checkbox" id="c1" value="c1 val" v-model="checked" />
  <label for="c1 val">{{ checked }}</label>
  <br />
  <p>bound array: {{ checkedA }}</p>
  <input type="checkbox" id="c11" value="c11 val" v-model="checkedA" />
  <input type="checkbox" id="c12" value="c12 val" v-model="checkedA" />
  <input type="checkbox" id="c13" value="c13 val" v-model="checkedA" />
  <br />
  <p>Selected: {{ selected }}</p>
  <select v-model="selected">
    <option disabled value="">please select a value</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
  <br />
  <p>Selected multiple: {{ selectedA }}</p>
  <select v-model="selectedA" multiple>
    <option disabled value="">please select a value</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
  <br />
  <p>Select with for: {{ slectedF }}</p>
  <select v-model="slectedF">
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.text }}
    </option>
  </select>
  <br />
  <p>trimmed value: "{{trimmed}}"</p>
  trimmed: <input v-model.trim="trimmed" />
</template>
