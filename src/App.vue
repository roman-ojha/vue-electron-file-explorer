<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

import { app } from "@electron/remote";

import { computed, ref } from "vue";

import fs from "fs";
import pathModule from "path";

// because we have enable to use 'fs' & 'path' module we can be able to use it inside vue application

// To convert byte number result into more human readable formate
const formatSize = (size) => {
  var i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    " " +
    ["B", "kB", "MB", "GB", "TB"][i]
  );
};

export default {
  name: "App",
  setup() {
    const path = ref(app.getAppPath());
    // path ref will contain the current path where the user is
    // we will also default this with the location of the electron app to get the app's location we will need make a ipc call to the backend process for that electron remote has a function
    const files = computed(() => {
      // now ths will read the file in the given directory
      const fileNames = fs.readdirSync(path.value);
      // fileNames contain the array of file name of all the file and directory in a given path
      return fileNames
        .map((file) => {
          // because this will not gives us all the information we need we will iterate to each path and statSync to determine if it's a directory and also get the file size
          const stats = fs.statSync(pathModule.join(path.value, file));
          return {
            name: file,
            size: stats.isFile() ? formatSize(stats.size ?? 0) : null,
            directory: stats.isDirectory(),
          };
        })
        .sort((a, b) => {
          // before returning file to the computed function we should also sort the files so we display directories first then files and also sort their names in alphabetical order
          if (a.directory === b.directory) {
            return a.name.localeCompare(b.name);
          }
          return a.directory ? -1 : 1;
        });
    });
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
