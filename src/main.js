/*
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

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
