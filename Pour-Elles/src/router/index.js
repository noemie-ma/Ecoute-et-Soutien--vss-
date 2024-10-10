import { createRouter, createWebHistory } from "vue-router";
import AccueilPage from "@/views/AccueilPage.vue";
import ContactPage from "@/views/ContactPage.vue";

const routes = [
  {
    path: "/AccueilPage",
    name: "AccueilPage",
    component: AccueilPage,
  },
  {
    path: "/ContactPage",
    name: "ContactPage",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
