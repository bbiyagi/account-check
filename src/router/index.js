import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export default createRouter({
  // Hash
  // https://google.com/#/search
  history: createWebHistory(),
  // pages
  // https:// google.com
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/account",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});
