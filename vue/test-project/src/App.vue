<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Example from "./components/Example.vue";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav> -->
  <header>
    <HelloWorld msg="You did it" />
    <Example />
  </header>
  <div>

  </div>
</template>

<style scoped>

</style>
