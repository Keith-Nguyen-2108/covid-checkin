import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueConfetti from "vue-confetti";

const app = createApp(App);

import DefaultLayout from "./layouts/DefaultLayout.vue";
import NoNavbarLayout from "./layouts/NoNavbarLayout.vue";

app.component("default-layout", DefaultLayout);
app.component("no-navbar-layout", NoNavbarLayout);
app.use(store);
app.use(router);
app.use(VueConfetti);
app.mount("#app");
