<script setup>
import { ref } from 'vue'

const searchImage = ref('')
function message(message) {
  alert(message)
}
</script>

<template>
  <h1>Section</h1>
  <main role="main" aria-labelledby="main-title">
    <h1 id="main-title">Main title</h1>
    <section aria-labelledby="section-title1">
      <h2 id="section-title1">Section Title</h2>
      <h3>Section Subtitle</h3>
      <p>content</p>
    </section>
    <section aria-labelledby="section-title2">
      <h2 id="second-title2">Section Title</h2>
      <h3>Section Subtitle</h3>
      <p>content</p>
    </section>
  </main>

  <fieldset>
    <legend>Using aria-describedby</legend>
    <label id="dob" for="dob">Date of Birth:</label>
    <input type="date" name="dob" id="dob" aria-describedby="dob-instructions" />
    <p id="dob-instructions">MM/DD/YYYY</p>
  </fieldset>

  <form role="search">
    <label for="search" class="hidden-visually">Search: </label>
    <input type="text" name="search" id="search" v-model="searchImage" />
    <input type="image" @click.stop.prevent="message('stopped and prevented')" class="btnImg" src="https://img.icons8.com/search" alt="Search" />
  </form>
</template>
