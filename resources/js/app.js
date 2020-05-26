import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

import store from "../js/store";

Vue.use(VueRouter);
const requireComponent = require.context(
    "./components",
    false,
    /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);

    const componentName = upperFirst(
        camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
    );

    Vue.component(componentName, componentConfig.default || componentConfig);
});

const app = new Vue({
    el: "#app",
    store,
    router: new VueRouter(routes)
});
