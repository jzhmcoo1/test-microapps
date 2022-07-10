import { createApp, App as AppType } from "vue";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import { createRouter, createWebHistory } from "vue-router";
import "./public-path";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const APP_NAME = require("../package.json").name;

let router = null;

let app: AppType | null = null;

const createMyApp = () => createApp(App);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function render(props: any = {}) {
  app = createMyApp();
  const { container } = props;
  router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? APP_NAME : ""),
    routes,
  });
  app
    .use(store)
    .use(router)
    .mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  console.log("bootstrap");
}

/**
 * mount ： 在应用每次进入时调用
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function mount(props: any) {
  console.log("mount", props);
  render(props);
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
  console.log("unmount");
  app!.unmount();
  app = null;
}
