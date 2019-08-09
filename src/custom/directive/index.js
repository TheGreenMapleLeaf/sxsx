import Vue from "vue"

Vue.directive("scroll",(el,binding)=>{
    el.addEventListener("scroll",()=>{
        if(el.scrollTop>500){
            binding.value.vis = true;
        }else{
            binding.value.vis = false
        }
    })
})