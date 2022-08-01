<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import {compute,ref} from 'vue'
// import fs from "fs";
// import pathModule from "path";
// because we have enable to use 'fs' & 'path' module we can be able to use it inside vue application

export default {
  name: "App",
  setup() {
    // const path = ref();
    // path ref will contain the current path
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
