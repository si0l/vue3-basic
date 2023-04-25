import { createApp } from 'vue'
import App from './App.vue'
import ButtonExample from './components/ButtonExample.vue'
import ComputedExample from './components/ComputedExample.vue'

const app = createApp(App)

app.component('ButtonExample', ButtonExample).component('ComputedExample', ComputedExample)
app.provide('message2', 'hello2')

app.directive('log', (element) => console.log('element: ' + element.tagName))

app.config.errorHandler = (err, instance, info) => {
  console.log(`err: ${err}, instance: ${instance}, info: ${info}`)
}

app.mount('#app')
console.log(`config: ${app.config}`)
