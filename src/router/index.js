import Vue from 'vue'
import Router from 'vue-router'
import Warning from '@/components/warning'
import Task from '@/components/task'
import About from '@/components/about'
import HomePage from '@/components/homePage'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{ 
	    path: '/', 
	    redirect: { name: 'index'}
	  },{
      path: '/index',
      name: 'index',
      component: HomePage
    },{
      path: '/warning',
      name: 'warning',
      component: Warning
    },{
      path: '/task',
      name: 'task',
      component: Task
    },{
      path: '/about',
      name: 'about',
      component: About
    }]
})

export default router
