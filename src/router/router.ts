import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/homepage/";
console.log(import.meta.env.BASE_URL);
export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...Homepage],
});
