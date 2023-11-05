import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from "vue3-cookies";
import store from "./store";
import ExposeContext from "./helper/exposeContextPlugin";

createApp(App).use(store).use(router).use(VueCookies).use(ExposeContext()).mount("#app");
