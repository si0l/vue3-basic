<script setup>
import { ref, onMounted, reactive, nextTick } from 'vue'
// import ReactiveTest from './ReactiveTest.vue'

//initial object is not reactive
const initialObj = { count: 0 }
//only proxy is reactive
const state = reactive(initialObj)

const count = ref(0)

let countNotReactive = 0

const testId = 1
const isDisabled = '' //true
const html = "<span style='color: red'>test</span>"
const objectWithAttrs = {
  attr1: 'attr1Value1',
  attr2: 'attrValue2'
}
const eventName = 'click'

function increment() {
  count.value++
  state.count++
  //to access updated DOM - use nextTick method
  nextTick(() => {
    // access updated DOM
  })
}

function incrementNotReactive() {
  countNotReactive++
}

function incrementNotReactiveObject() {
  initialObj.count++
}

onMounted(() => {
  console.log(`hi, count is ${count.value}`)
})
</script>

<template>
  <h1>Button Example</h1>
  <button @click="increment">Count is {{ count }}</button>
  <br />
  <button @click="incrementNotReactive">Count not reactive is {{ countNotReactive }}</button>
  <br />
  <button @click="incrementNotReactiveObject">
    Count not reactive object is {{ initialObj.count }}
  </button>
  <br />
  <span>state:{{ state }}</span>
  <p v-html="html"></p>

  <!-- <button @click="ReactiveTest.increment">
    Imported component count is {{ ReactiveTest.state.count }}
  </button> -->

  <!-- same  <p v-bind:id="testId">p with id:{{ testId }}</p>-->
  <p :id="testId">p with id:{{ testId }}</p>

  <button :disabled="isDisabled">Count is {{ count }}</button>

  <div v-bind="objectWithAttrs">div with attributes bound from object: {{ objectWithAttrs }}</div>

  <!-- same as <a v-on:click = "increment">increment too</a> -->
  <a v-on:[eventName]="increment">increment too</a>
  <!-- <form @submit.prevent="click"><input type="submit" value="prevent submit" /></form> -->
</template>
