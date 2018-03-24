import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/view/layout/layout';
import index from '@/view/index/index';
import login from '@/view/login/index';
import menu from '@/components/menu';
import user from '@/components/user';
import role from '@/components/role';

Vue.use(Router);


export default new Router({
    routes: [
        {
            path: '/',
            name: '首页',
            component: layout,
            children: [
                { path: '/index', component: index, name: '主页', hidden: true },
            ]
        }
    ]
})
