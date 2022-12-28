import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import bottomNavigationVue from "bottom-navigation-vue";
import moment from 'moment-timezone'

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

let VueScrollTo = require('vue-scrollto');

import '/src/assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bottom-navigation-vue/dist/style.css";

createApp(App)
    .use(router)
    .use(store)
    .use(bottomNavigationVue)
    .use(VueScrollTo)
    .use(moment)
    .use(Toast)
    .mount('#app')
