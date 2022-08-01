/*
    -> https://nklayman.github.io/vue-cli-plugin-electron-builder/
    *) Setup:
        -> npm install -g @vue/cli
        -> vue create <project_name>
        -> cd <project_name>
        -> vue add electron-builder
            -> chose latest version of electron provided by electron-builder
            -> if latest version provided by electron-builder is less then the latest version of vue then run:
            -> yarn add electron
        -> yarn add bootstrap@next
        -> yarn electron:serve
*/

/*
    -> after we setup vue electron:
        -> we will get the file called 'background.js' which is equivalent to the main.js file that runs vue and sets up the electron to run electron 
        -> after this as per our project purpose as will going to use IPC which will help us to communicate between vueJS to main process 
    -> because we need to access 'fs' & 'path' package we have to integrate node
        -> add this in 'vue.config.js'
        -> pluginOptions: {
            electronBuilder: {
            nodeIntegration: true,
            },
  },
        -> NOTE: it is recommended to not enable if we are not using default node package
*/

import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
// import bootstrap

createApp(App).mount("#app");
