import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/home";
import Register from "@/views/register";
import Login from "@/views/login";
import Search from "@/views/search";
import Offer from "@/views/offer";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/offer",
    name: "Offer",
    component: Offer
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
