import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/homepage/";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...Homepage],
});
