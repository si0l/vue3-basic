<script setup>
import { onMounted } from 'vue'

// const props = defineProps(['title'])//possible as array
const props = defineProps({
  title: String,
  propNumber: Number,
  propTypes: [String, Number],
  propObj: {
    type: Object,
    required: Boolean
  },
  propDefault: {
    type: String,
    default: 'default value'
  },
  propDefaultObj: {
    type: Object,
    default(rawProp) {
      if (rawProp.propDefaultObj) {
        return {
          message: rawProp.propDefaultObj
        }
      } else {
        return {
          defaultV: 'Hi'
        }
      }
    }
  },
  propValidator: {
    validator(value) {
      return ['hi', 'bye'].includes(value)
    }
  },
  propFunction: {
    func: Function,
    default() {
      return () => console.log('hi')
    }
  }
})

onMounted(() => {
  const testF = (message) => console.log(message)
  testF("test")
  props.propFunction()
})
</script>

<template>
  <div>
    <h1>Props 2</h1>
    <br />
    <p>title: {{ title }}</p>
    <p>propNumber: {{ propNumber }}</p>
    <p>propTypes: {{ propTypes }}</p>
    <p>required propObj: {{ propObj }}</p>
    <p>propDefault: {{ propDefault }}</p>
    <p>propDefaultObj: {{ propDefaultObj }}</p>
    <p>propValidator: {{ propValidator }}</p>
  </div>
</template>
