import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Banner from '../components/banner1'
import BannerText from '../components/banner2'

Vue.use(Router)

export default new Router({
		mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
    	path:'/banner',
    	name:'banner',
    	component:Banner,
    	children:[
    		{
    			path:'text',
    			name:'bannertext',
    			component:BannerText
    		}
//  		component: () => import('@/view/page/business-center/contract-admin/contract-manintain/add-contract.vue')
    	]
    }
  ]
})
