import Vue from "vue";
import VueRouter from "vue-router";


import Login from "../views/Login/Login"
import Index from "../views/Index/Index"
import Home from "../views/Home/Home";
import Table from "../views/Table/Table";
import Button from "../views/Button/Button";
import Form from "../views/Form/Form";
import add from "../views/Table/add";


Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: '首頁',
            path: '/',
            iconClass: Login,
            component: Login,
            children: []
        },
        {
            name: '主页',
            path: '/index',
            iconClass: Index,
            component: Index,
            children: [
                {
                    name: '首頁',
                    path: '/home',
                    iconClass: 'el-icon-s-data',
                    component: Home,
                    children: []
                },
                {
                    name: '表单',
                    path: '/form',
                    iconClass: 'el-icon-s-data',
                    component: Form,
                    children: []
                },
                {
                    name: '可编辑表格',
                    path: '/table',
                    iconClass: 'el-icon-s-data',
                    component: Table,
                    children: [
        
                    ]
                },
                {
                    name: '新增',
                    path: '/table/add',
                    iconClass: 'el-icon-s-data',
                    component: add,
                },
                {
                    name: '普通按钮',
                    path: '/button',
                    component: Button,
                    iconClass: 'el-icon-menu',
                    children: []
                },
                {
                    name: '选择',
                    path: '/select',
                    component: () => import('../views/Select/Select'),
                    iconClass: 'el-icon-menu',
                    children: []
                },
                {
                    name: '上传',
                    path: '/upload',
                    component: () => import('../views/Upload/Upload'),
                    iconClass: 'el-icon-menu',
                    children: []
                },
                {
                    name: '评分',
                    path: '/rate',
                    component: () => import('../views/Rate/Rate'),
                    iconClass: 'el-icon-menu',
                    children: []
                },
            ]
        },

    ]
})

/*
beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
        // 通过 `vm` 访问组件实例
    })
}

beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next();
}

beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
}
*/

/*router.beforeEach((to, from, next) => {
    console.log('to', to)
    console.log('from', from)
    console.log('next', next)
    next()
})*/

export default router
