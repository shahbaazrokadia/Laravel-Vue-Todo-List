import Home from "./components/Home";
import Todo from "./components/Todo";
export default {
    mode: "history",
    routes: [{
            path: '/',
            component: Todo
        },
        {
            path: '/about',
            component: Home
        },
    ]
};
