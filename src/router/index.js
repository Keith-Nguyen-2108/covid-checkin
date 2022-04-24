import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      layout: "no-navbar",
    },
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    meta: {
      layout: "default",
    },
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/location",
    name: "location",
    meta: {
      layout: "default",
    },
    component: () => import("../views/Location.vue"),
  },
  {
    path: "/office-guidelines",
    name: "Office Guidelines",
    meta: {
      layout: "default",
    },
    component: () => import("../views/OfficeGuidelines.vue"),
  },
  {
    path: "/health-checklist",
    name: "Health CheckList",
    meta: {
      layout: "default",
    },
    component: () => import("../views/HealthCheckList.vue"),
  },
  {
    path: "/personal-information",
    name: "Contact Information",
    meta: {
      layout: "default",
    },
    component: () => import("../views/ContactInformation.vue"),
  },
  {
    path: "/status-checkin",
    name: "Status Checkin",
    meta: {
      layout: "default",
    },
    component: () => import("../views/StatusCheckin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
