<script setup>
import { ref } from 'vue'

const count = ref(0)
const consoleM = console

function callAlert(event) {
  alert(event.target.tagName)
}

function message(message) {
  alert(message)
}
</script>

<template>
  <h1>Events</h1>
  <button @click="count++">{{ count }}</button>
  <br />
  <button @click="callAlert">alert</button>
  <br />
  <button @click="message('yo')">yo</button>
  <br />
  <button @click="consoleM.log(`event:${$event}`)">log event</button>
  <br />
  <button @click="(event) => consoleM.log(`event2:${event}`)">log event2</button>

  <br />
  <a @:click.stop.prevent="message('stopped and prevented')" href="http://google.com">stopped and prevented</a>
  <br />
  <br />
  <a @:click.stop.prevent.once="message('stopped and prevented')" href="http://google.com">stopped and prevented once</a>
  <br />

  <input @keyup.enter="message($event.target.value)" value="press enter"/>
  <input @keyup.alt.enter="message('alt enter')" value = 'press alt enter'/>
</template>
