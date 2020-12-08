import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store';
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/login',
      component:()=>import('@/views/Login'),
      meta:{title:'登录'}
    },
    {
      path: '/',
      component:()=>import('@/views/Layout'),
      redirect:'/index',
      meta:{title:'xx管理系统'},
      children:[
        {
          path: '/index',
          component:()=>import('@/views/Index'),
          meta:{title:'后台首页'}
        },
        {
          path: '/menu',
          component:()=>import('@/views/System/Menu'),
          meta:{title:'菜单管理'}
        },
        {
          path: '/role',
          component:()=>import('@/views/System/Role'),
          meta:{title:'角色管理'}
        },
        {
          path: '/user',
          component:()=>import('@/views/System/User'),
          meta:{title:'管理员管理'}
        },
      ]
    },
    
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    document.title = to.meta.title
    next()
  } else {
    if (localStorage.getItem('userinfo')) { 
      let whiteList = store.getters['user/menus_url']
      whiteList.push('/index')
      if (whiteList.includes(to.path)) {
    document.title = to.meta.title

        next()
      }
    }
    else {
      next("/login")
    }
  }
 
})
export default router;