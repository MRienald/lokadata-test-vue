import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path : '/',
        name : 'messageBoard.index',
        component : () => import("../views/messageBoard/index.vue")
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;