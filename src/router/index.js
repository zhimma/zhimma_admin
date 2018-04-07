import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/view/layout/layout';
import index from '@/view/index/index';
import login from '@/view/login/index';
import menuCreate from '@/view/menu/create';
import menuIndex from '@/view/menu/index';


Vue.use(Router);


export default new Router({
    routes: [
        {
            path : '/login',
            name : '登录',
            component : login,
            meta : {
                requireAuth : false
            }
        },
        {
            path: '/',
            name: '主页',
            component: layout,
            children: [
                { path: '/index', component: index, name: '主页'},
            ]
        },
        {
            path: '/',
            name: '菜单管理',
            component: layout,
            children: [
                { path: '/menu', component: menuIndex, name: '菜单列表'},
                { path: '/menu/create', component: menuCreate, name: '添加菜单'},
            ]
        },


    ]
})
