import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Houses from '@/components/Houses';
import Signup from '@/components/Signup';
import LandingPage from '@/components/LandingPage'
import Hostels from '@/components/Hostels';
import Apartements from '@/components/Apartments';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: LandingPage,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup,
        },
        {
            path: '/houses',
            name:'houses',
            component: Houses
        },
        {
            path: '/hostels',
            name: 'hostels',
            component: Hostels
        },
        {
            path: '/apartments',
            name: 'apartments',
            component: Apartements
        }
    ]
})

export default router;
