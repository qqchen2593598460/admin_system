import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import routes from './routes'

Vue.use(VueRouter);
Vue.use(iView);


const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    next();
});

new Vue({
    el: '#app',
    template: '<App/>',
    router,
    components: { App }
}).$mount('#app');