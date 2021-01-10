  
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import lister from './components/lister' ;
import nouveau from './components/nouveau' ;
import main from './components/main' ;
import modifier from './components/modifier' ;


Vue.use(VueRouter);


const routes = [
  {path:'/lister',component:lister},
  {path:'/',component:main},
  {path:'/modifier/:ID',component:modifier},
  {path:'/nouveau',component:nouveau},
];

const router = new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

