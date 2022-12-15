import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import bottomNavigationVue from "bottom-navigation-vue";

import '/src/assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bottom-navigation-vue/dist/style.css";

createApp(App)
    .use(router)
    .use(store)
    .use(bottomNavigationVue)
    .mount('#app')
