<template>
    <div class="swiper-container carcousel_swiper_container">
        <div class="swiper-wrapper" >
            <div class="swiper-slide" v-for="(item,index) in data" :key="index" @click="handlerToList()">
                <img :src="item.PicUrl" alt="">
            </div>
            
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination carcousel_swiper_pagination"></div>
    </div>
</template>

<script>
    import Swiper from "swiper";
    import "swiper/dist/css/swiper.min.css";
export default {
    name: "carousel",
    components: {
        Swiper
    },
    data() {
        return {
            data:[]
        };
    },
    created() {
        this.$axios.get("/api/sh/Home/AdvertisementPhotoshootRequest?sourcetype=9&json=%7B%22TypeCode%22:1011,%22PlatForm%22:1500%7D").then((data)=>{
            this.data=data.data.Data;
        })
    },
    methods: {
        handlerToList(){
            console.log(111)
        }
    },
    watch: {
        data(){ // 保证数据一定变了，保证dom准备好了
            this.$nextTick(()=>{  //延迟回调函数的执行，知道dom就绪
                var mySwiper = new Swiper ('.carcousel_swiper_container', {
                    loop: true, // 循环模式选项
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    // 如果需要分页器
                    pagination: {
                        el: '.carcousel_swiper_pagination',
                    },
                }) 
            })        
        }
    },
};
</script>
<style scoped>
    .swiper-container{
        width:100%;
        height: 100%;
    }
    .swiper-slide>img{
        width: 100%;
        height: 100%;
    }
</style>
