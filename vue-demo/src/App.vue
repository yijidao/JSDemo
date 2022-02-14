<template>
  <!-- <div id="nav">
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/timer">Timer</router-link>
  </div> -->
  <router-view/>
  <!-- <Home /> -->
</template>
<script>
// import Home from "@/views/Home.vue";
export default {
  components: {
    // Home,
  },
};
</script>
<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
