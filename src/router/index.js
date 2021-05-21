import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{title:"大盘异动计算平台仲裁服务监控"},
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{//beforeEach是router的钩子函数，在进入路由前执行
  if(to.meta.title){//判断是否有标题
      document.title = to.meta.title
  }else{
    document.title = '仲裁服务监控'
  }
  next()  //执行进入路由，如果不写就不会进入目标页
})

export default router
