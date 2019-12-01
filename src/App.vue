<template>
  <div id="app">
    <NavBar />
    <HeaderBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/Nav.vue";
import HeaderBar from "./components/Header.vue";

export default {
  name: "app",
  components: {
    NavBar,
    HeaderBar
  }
};
</script>

<style>
</style>
