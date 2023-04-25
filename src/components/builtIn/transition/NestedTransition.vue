<script setup>
import { ref } from 'vue'

const onEnter = () => {
  console.log("transition onEnter event triggered")
}

const show = ref(true)
</script>

<template>
  <h1>Nested Transition</h1>
  <button @click="() => (show = !show)">Toggle</button>
  <Transition appear @enter="onEnter" :duration="550" name="nested">
    <div v-if="show" class="outer">
      <div class="inner">Nested</div>
    </div>
  </Transition>
</template>

<style>
.outer {
  background: #9c4747;
  padding: 30px;
  min-height: 100px;
}

.inner {
  background: #5a7556;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}
</style>
