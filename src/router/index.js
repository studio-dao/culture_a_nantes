import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";
import MusiquesActuelles from "../views/musiques_actuelles.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App",
    component: App,
  },

  {
    path: "/musiquesactuelles",
    name: "MusiquesActuelles",
    component: MusiquesActuelles,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;