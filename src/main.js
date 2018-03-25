// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App';
import router from './router';
import Config from './config';

import 'font-awesome/css/font-awesome.min.css'

Vue.prototype.$Config = Config;
Vue.use(ElementUI);

//全局前置钩子
router.beforeEach((to, from, next) => {
    /*window.document.title = to.meta.title?to.meta.title+'-'+Config.siteName:Config.siteName;

    if (!sessionStorage.getItem(Config.tokenKey) && to.path != '/login') {
        next({path: '/login'});
    } else {
        next();
    }*/
    next();

});
//全局后置钩子
router.afterEach(transition => {

});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
    render: h => h(App)
})
