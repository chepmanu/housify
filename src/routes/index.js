import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
    ]
})

export default router;