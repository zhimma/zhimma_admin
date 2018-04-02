import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/view/layout/layout';
import index from '@/view/index/index';
import login from '@/view/login/index';


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
            name: '首页',
            component: layout,
            children: [
                { path: '/index', component: index, name: '主页', hidden: true },
            ],
            meta : {
                requireAuth : true
            }
        }
    ]
})
