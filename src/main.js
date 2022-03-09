import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import router from "./router";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/clearDefault.css";
import "./assets/css/standard.css";
import store from "./store";

Vue.prototype.$bus = new Vue();
Vue.filter("dataFormat", (originVal) => {
  const dt = new Date(originVal);
  const y = dt.getFullYear();
  const m = (dt.getMonth() + 1 + "").padStart(2, "0");
  const d = (dt.getDate() + "").padStart(2, "0");
  return `${y}-${m}-${d} `;
});

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
