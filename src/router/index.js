import {createRouter, createWebHashHistory} from "vue-router";

//1.定义路由组件
import Login from '@/views/Login.vue'
import Home from '@/views/home/Home.vue'

//2.配置路由映射
const routes = [
    {path:'/', component: Login},
    {path:'/login', component: Login},
    {name:'home', path:'/home', component: Home,
    children:[{
        name: 'map',
        path:'map',//子组件的path不以/开头
        component: () => import('@/views/home/components/MapView.vue')
    },
    {
        name: 'rygl',
        path:'rygl',//子组件的path不以/开头
        component: () => import('@/views/home/components/PersonManage.vue')
    },
    {
        name: 'wlgl',
        path:'wlgl',//子组件的path不以/开头
        component: () => import('@/views/home/components/Fence.vue')
    }

        ]
    },
    
]

//3.创建路由实例
const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router;