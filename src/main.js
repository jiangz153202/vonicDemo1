import Vue from 'vue'
import Vonic from 'vonic'
import store from './store' 
import { currency } from './currency'
import $axios from './libs/axios';




Vue.use($axios);
Vue.filter('currency', currency)

import Index from 'components/Index.vue';
import ProductList from 'components/list/ProductList.vue'
import UserIndex from 'components/user/Index.vue'
import Login from 'components/user/login.vue';
import About from 'components/user/About.vue';

//引入路由
const routes = [
  {
    path:'/',
    name:'Home',
    component:Index
  },
  {
    path:'/user',
    name:'UserIndex',
    component:UserIndex
  },
  {
    path:'/user/auth',
    name:'Login',
    component:Login
  },
  {
    path:'/user/About',
    name:'About',
    component:About
  },
  {
    path:'/list/products',
    name:'ProductList',
    component:ProductList
  }
]
//todo 3.设置全局路由钩子
// import sess from './sess'
// Vonic.app.setConfig(
//   'beforeEach',function(to,from,next){
//     const to = to.path
//     const from = from.path 
//     const scrollTop = Vonic.app.pageContentScrollTop()

//     console.log(JSON.stringify(to)+"~~~~"+JSON.stringify(from));
//     let h = sess.get(to);
//     if(h && h.history){
//       Vonic.app.netDirection('back');
//       h.history=false
//       sess.set(to,h)
//     }else{
//       sess.set(from || '/',{
//         history:true,
//         scrollTop:screenTop
//       })
//       Vonic.app.netDirection('forward')
//     }
//   }
// )
Vonic.app.setConfig(
  'beforeEach',function(to,from,next){
    console.log('1跳转去'+to.path+'来自'+from.path);
    next();
  } 
)

// Routes
Vue.use(Vonic.app, {
  routes,
  store
 
})
