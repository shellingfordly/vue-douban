import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import HomeContent from '@/components/HomeContent'
import SingleFilm from '@/components/SingleFilm'

Vue.use(Router)

export default new Router({
  routes: [
   //  {
			// path:'/',
			// name: 'App',
			// component: App
   //  },
		{
			path:'/',
			name: 'HomeContent',
			component: HomeContent
		},
		{
			// '/film/:id;' 动态路由
			// 匹配到路由，找到SingleFilm组件
			path:'/film/:id',
			name: 'SingleFilm',
			component: SingleFilm
		},
  ]
})
