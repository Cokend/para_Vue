import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'
import Main from '../components/Main'
import Login from '../components/Login'
Vue.use(VueRouter)

export default [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/main',
        name: 'main',
        meta: {
            // 添加该字段，表示进入这个路由是需要登录的
            requireAuth: true,
        },
        component: Main,
        children: [{
            path: '/home',
            name: 'home',
            component: Home
        },
            {
                path: '/todo',
                name: 'todo',
                component: Todo
            },
            {
                path: '/about',
                name: 'about',
                component: function () {
                    return import(/* webpackChunkName: "about" */ '../views/About.vue')
                }
            }]

    },

]


