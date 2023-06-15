import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about-me",
    name: "about",
    component: () => import("@/views/AboutMe.vue"),
  },
  {
    path: "/all-work",
    name: "work",
    component: () => import("@/views/AllWork.vue"),
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
