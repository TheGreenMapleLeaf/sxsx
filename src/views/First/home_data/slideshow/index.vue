<template>
    <div class="slideshow">
        <div class="swiper-container slideshow_swiper_container">
            <div class="swiper-wrapper" >
                <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                    <img :src="item.PicUrl" alt="">
                </div>
            </div>

            <!-- 如果需要分页器 -->
            <div class="swiper-pagination slideshow_swiper_pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    import "swiper/dist/css/swiper.min.css";
export default {
    name:"slideshow",
    components:{
        Swiper,
    },
    data(){
        return {
            data:{},
        }
    },
    props:{
        list:{
            type:Array,
            default:[]
        }
    },
    watch: {
        list() {
            this.$nextTick(()=>{
                var mySwiper = new Swiper ('.slideshow_swiper_container', {
                    loop: true, // 循环模式选项
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    // 如果需要分页器
                    pagination: {
                        el: '.slideshow_swiper_pagination',
                    },
                }) 
            })
        },
    },
}
</script>
<style scoped>
    .slideshow{
        width: 100%;
        padding: 0.1rem 0.2rem;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3.28rem;
    }
    .swiper-container{
        width:100%;
        height: 100%;
    }
    .swiper-slide>img{
        width: 100%;
        height: 100%;
    }
</style>
