import First from '../first'
import Mart from '../mart'
import Cart from '../cart'
import User from '../user'
export default {
    path: '/home',//tabBar
    name: 'home',
    component: ()=>import('views/tabBar'),
    redirect:{name:'first'},
    children:[
        First,
        Mart,
        Cart,
        User
    ]
}