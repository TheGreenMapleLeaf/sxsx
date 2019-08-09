import Loading from "./index.vue"
import Vue from 'vue'
export default ()=>{
    let LoadingComponent=Vue.extend(Loading);
    let vm=new LoadingComponent({
        el:document.createElement("div"),
        data() {
            return {
                flag:false
            }
        },
        methods:{
            mountHandler(){
                this.flag=true
            },
            destoryHandler() {
                this.flag=false
            },
        }
    })
    document.body.appendChild(vm.$mount().$el)
    return vm
}
