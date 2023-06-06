import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/homepage/";
const router = createRouter({
  history: createWebHistory(),
  routes: [...Homepage],
});

export default router;
