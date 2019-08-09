import Product from "./product"
import Particulars from "./particulars"
import Evaluate from "./evaluate"
export default {
    path:'/details',//首页
    name:'details',
    component:()=>import('components/details'),
    redirect:'/details/product',
    children:[
        Product,
        Particulars,
        Evaluate
    ]
}