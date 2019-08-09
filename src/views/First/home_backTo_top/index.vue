<template>
    <div class="backto_top">
        <p class="arrows"></p>
    </div>
</template>
<script>
export default {
    name:"backtotop",
    data() {
        return {
            // flag:false
        }
    },
    // mounted() {
    //     window.addEventListener("scroll",this.scrollToTop,true)
    // },
    methods: {
        // scrollToTop(e) {
        //     var that = this
        //     var scrollTop = e.target.scrollTop
        //     if(scrollTop>window.innerHeight){
        //         that.flag = true
        //     } else {
        //         that.flag = false
        //     }
        // },
        // toTop() {
        //     let top = document.documentElement.scrollTop || document.body.scrollTop;
        //     // 实现滚动效果 
        //     const timeTop = setInterval(() => {
        //         document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        //         if (top <= 0) {
        //         clearInterval(timeTop);
        //         }
        //     }, 10);
        // }
    },
    // destroyed () {
    //     window.removeEventListener('scroll', this.scrollToTop,true); 
    // },
}
</script>
<style scoped>
    .backto_top{
        width: 1rem;
        height: 1rem;
        position: fixed;
        z-index: 99;
        background:rgba(0, 0, 0, .4);
        bottom: 1.4rem;;
        right: 0.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }
    .backto_top .arrows{
        width: 0.3rem;
        height: 0.3rem;
        border-top:0.04rem solid #fff;
        border-left:0.04rem solid #fff;
        transform: rotateZ(45deg);
        margin-top: 0.18rem;
    }
</style>
