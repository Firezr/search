import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Result from "./views/Result.vue";

let history = createWebHashHistory()
export default createRouter({
  history: history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/result',
      component: Result,
      children: [
        
      ]
    },
  ],
})
