import {store} from "./store";

import {createApp} from "vue";
import {provideStoreToApp} from "@reduxjs/vue-redux";
import VueApp from "./vue/App.vue";
const vueApp = createApp(VueApp)
provideStoreToApp(vueApp, {store})
vueApp.mount('#vue-header');

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {ReactApp} from "./react/App.tsx";
import {Provider} from "react-redux";

createRoot(document.getElementById("react-sidebar")!).render(
  <Provider store={store}>
    <StrictMode>
      <ReactApp />
    </StrictMode>
  </Provider>
);
