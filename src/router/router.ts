import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/homepage/";
export default createRouter({
  history: createWebHistory("/todo-app/"),
  routes: [...Homepage],
});
