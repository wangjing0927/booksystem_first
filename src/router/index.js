import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/bookList'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/bookList',
                    component: () => import(/* webpackChunkName: "bookList" */ '../components/page/bookList.vue'),
                    meta: { title: '图书管理' }
                },
                {
                    path: '/borrowedList',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/borrowedList.vue'),
                    meta: { title: '借还记录' }
                },
                {
                    path: '/employeesList',
                    component: () => import(/* webpackChunkName: "employeesList" */ '../components/page/employeesList.vue'),
                    meta: { title: '员工管理' }
                },
                {
                    path: '/departmentList',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/departmentList.vue'),
                    meta: { title: '部门管理' }
                },
                {
                    path: '/bookclassifyList',
                    component: () => import(/* webpackChunkName: "bookclassifyList" */ '../components/page/bookclassifyList.vue'),
                    meta: { title: '图书分类管理' }
                },
     

               
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
    ]
});
