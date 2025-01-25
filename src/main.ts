import { createApp } from "vue";
import { i18n } from "./lang";

import App from "./App.vue";

import "@/styles/reset.scss";

createApp(App).use(i18n).mount("#app");
