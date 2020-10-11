import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'

import "./assets/local-ntp.css";
import "./assets/local-ntp-common.css";
import "./assets/local-ntp-customize.css";
import './assets/svg.js'

import router from "./router.js";

const app = createApp(App)
app.use(router)
app.mount('#app')
