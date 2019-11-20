
import Vue from 'vue'
import store from './store/store'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './router/routes'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import './plugins/element.js'

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {

    if (to.meta.requireAuth) {

        // console.log(isEmptyObject(store.state.user))
        if(!isEmptyObject(store.state.user)) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
})

Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})
function isEmptyObject(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}
//判断object是否为空

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
})
