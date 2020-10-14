import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Orders from "./views/Orders.vue";
import Dashboard from "./views/Dashboard.vue";
import Servicecontracts from "./views/Servicecontracts.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/servicecontracts",
      name: "servicecontracts",
      component: Servicecontracts
    }
  ]
});
