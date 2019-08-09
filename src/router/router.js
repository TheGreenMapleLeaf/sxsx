import Vue from 'vue'
import Router from 'vue-router'
import Home from './tabBar'
import Search from "./search"
import Searchone from './searchone'
import Goods from './goods'
import CityList from './cityList'
import Login from './logIn'
import details from './details'
import Flashdetails from "./flash_details/index.js"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:{name:'home'}
    },
    Home,
    CityList,
    Login,
    Search,
    Searchone,
    Goods,
    details,
    Flashdetails
 
  ]
})
