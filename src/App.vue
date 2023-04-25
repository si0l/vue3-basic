<script setup>
import BindStyle from './components/BindStyle.vue'
import ConditionsExample from './components/ConditionsExample.vue'
import EventExample from './components/EventExample.vue'
import FormExample from './components/FormExample.vue'
import IterationExample from './components/IterationExample.vue'
import RefExample from './components/RefExample.vue'
import SetupNoBuild from './components/SetupNoBuild.vue'
import WatchersExample from './components/WatchersExample.vue'
import ComponentProps from './components/ComponentProps.vue'
import ComponentProps2 from './components/ComponentProps2.vue'
import { provide, readonly, ref } from 'vue'
import ComponentEmit from './components/ComponentEmit.vue'
import ComponentModel from './components/ComponentModel.vue'
import SlotExample from './components/SlotExample.vue'
import InjectParent from './components/InjectParent.vue'
import ComposableExample from './components/ComposableExample.vue'
import CustomDirective from './components/CustomDirective.vue'
import TransitionExample from './components/builtIn/transition/TransitionExample.vue'
import NestedTransition from './components/builtIn/transition/NestedTransition.vue'
import TransitionElements from './components/builtIn/transition/TransitionElements.vue'
import GroupExample from './components/builtIn/transitionGroup/GroupExample.vue'
import StaggerExample from './components/builtIn/transitionGroup/StaggerExample.vue'
import KeepAliveExample from './components/builtIn/keepAlive/KeepAliveExample.vue'
import ModalExample from './components/builtIn/teleport/ModalExample.vue'
import AccessibilityExample from './components/AccessibiltyExample.vue'

provide('message', 'hello')

const showModal = ref(true)

let titles = ref([
  { id: 1, title: 't1' },
  { id: 2, title: 't2' }
])
const titles2 = ref([
  { id: 3, title: 't3' },
  { id: 4, title: 't4' }
])
function updateTitleFunction() {
  titles.value = [...titles2.value]
}
const titlesData = {
  titles: readonly(titles),
  titles2: readonly(titles2),
  updateTitles: updateTitleFunction
}

provide('titlesData', titlesData)

const fs = ref(1)
const props2 = ref({
  title: 'Title',
  propNumber: 24,
  propTypes: 'Hi',
  propObj: { type: 't' },
  propValidator: 'hello'
  // propDefaultObj: { some: 11}
})

const mAlert = (message) => alert(message)

const searchText1 = ref('hi')
const searchText2 = ref('bye')
const footerName = ref('footer')
const slotStyle = ref('color: red')
</script>

<template>
  <AccessibilityExample />
  <br />
  <button @click="showModal = true">Show Modal</button>
  <Teleport to="body">
    <ModalExample :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Custom Header</h3>
      </template>
    </ModalExample>
  </Teleport>
  <br />
  <KeepAliveExample />
  <br />
  <StaggerExample />
  <br />
  <GroupExample />
  <br />
  <TransitionElements />
  <br />
  <NestedTransition />
  <br />
  <TransitionExample />
  <br />
  <CustomDirective />
  <br />
  <ComposableExample />
  <br />
  <InjectParent />
  <br />
  <SlotExample>
    <template v-slot:header>
      <h1>Header</h1>
    </template>
    <template #default>
      <p>main content</p>
    </template>
    <!-- default can skip template tag:
    <p>main content</p> -->
    <template #[footerName]="{ message, number }">
      <div :style="slotStyle">{{ message }}: {{ number }}</div>
    </template>
  </SlotExample>
  <br />
  <ComponentModel v-model:modelValue1.capitalize="searchText1" v-model:modelValue2="searchText2" />
  <p>{{ searchText1 }}</p>
  <p>{{ searchText2 }}</p>
  <br />
  <ComponentEmit @send-message="(message) => mAlert(message)" />
  <br />
  <ComponentProps2 v-bind="props2" />
  <br />
  <div :style="{ fontSize: fs + 'em' }">
    <ComponentProps title="Title param" @enlarge-text="fs += 0.1" @reduce-text="fs -= 0.1">Slot content</ComponentProps>
  </div>
  <ComponentProps v-for="title in titles" :key="title.id" :title="title.title" />
  <br />
  <RefExample />
  <br />
  <WatchersExample />
  <br />
  <FormExample />
  <br />
  <EventExample />
  <br />
  <!-- globally registered -->
  <ButtonExample />
  <br />
  <SetupNoBuild />
  <br />
  <ComputedExample />
  <br />
  <BindStyle />
  <br />
  <ConditionsExample />
  <br />
  <IterationExample />
</template>
