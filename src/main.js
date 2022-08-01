/*
    *) Setup:
        -> npm install -g @vue/cli
        -> vue create <project_name>
        -> cd <project_name>
        -> vue add electron-builder
            -> chose latest version of electron provided by electron-builder
            -> if latest version provided by electron-builder is less then the latest version of vue then run:
            -> yarn add electron
        -> yarn electron:serve
            -> NOTE: you could get some error while running app, please google it
*/

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
