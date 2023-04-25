<script setup>

</script>

<template>
  <h1>Slot</h1>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer" v-bind="{ message: 'hi', number: 3 }"></slot>
    </footer>
  </div>
</template>
