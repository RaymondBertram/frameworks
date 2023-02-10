<script lang="ts">
export default {
  data() {
    return {
      id: 1,
      likes: 95,
      firstname: 'Max',
      lastname: 'Peter',
    }
  },
  methods: {
    addLikes() {
      this.likes++;
    },
    removeLikes() {
      this.likes--;
    },
  }
}

</script>

<template>
  <div class="app-container">
    <h1>His name is {{ firstname }} {{ lastname }}</h1>

    <div class="main-block">
      <p>id: {{ id }}</p>
      <p v-if="likes < 100">IF:This post has {{ likes }} likes </p>
      <p v-else="likes > 100">ELSE: This post has {{ likes }} likes</p>
      <button v-on:click="addLikes()">Add Like</button>
      <button v-on:click="removeLikes()">Remove Like</button>

      <div class="ordered-list">
        <h3>Ordered List Header 3</h3>
        <ol>
          <li>Listitem 1</li>
          <li>Listitem 2</li>
          <li>Listitem 3</li>
          <li>Listitem 4</li>
        </ol>
      </div>
    </div>

  </div>

</template>

<style scoped>
p {
  color: red;
}

.ordered-list {
  margin: 30px;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>