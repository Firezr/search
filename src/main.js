import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// import './assets/local-npt.css'
// import './assets/local-npt-common.css'

import router from "./router.js";

const app = createApp(App)
app.use(router)
app.mount('#app')
