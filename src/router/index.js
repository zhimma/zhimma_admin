import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index/index';
import login from '@/view/login/index';
import menu from '@/components/menu';
import user from '@/components/user';
import role from '@/components/role';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/index',
            name: '首页',
            component: index,
        },
        {
            path: '/',
            name: '首页',
            component: index
        },
        {
            path: '/login',
            name: 'login',
            hidden: true,
            component: login
        },
        {
            path: '/menu',
            name: '菜单管理',
            component: menu,
            hasChild: [
                {
                    path: 'menu/create', name: '添加菜单', component: 'MenuCreate'
                },
                {
                    path: 'menu/update', name: '修改菜单', component: 'MenuUpdate'
                },
                {
                    path: 'menu/delete', name: '删除菜单', component: 'MenuDelete'
                }
            ]
        },
        {
            path: '/user',
            name: '用户管理',
            component: user,
            hasChild: [
                {
                    path: 'user/create', name: '添加用户', component: 'UserCreate'
                },
                {
                    path: 'user/update', name: '修改用户', component: 'UserUpdate'
                },
                {
                    path: 'user/delete', name: '删除用户', component: 'UserDelete'
                }
            ]
        },
        {
            path: '/role',
            name: '角色管理',
            component: role,
            hasChild: [
                {
                    path: 'user/create', name: '添加用户', component: 'UserCreate'
                },
                {
                    path: 'user/update', name: '修改用户', component: 'UserUpdate'
                },
                {
                    path: 'user/delete', name: '删除用户', component: 'UserDelete'
                }
            ]
        },
    ]
})
