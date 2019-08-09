<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">{{item}}</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    
    <!-- 如果需要滚动条
    <div class="swiper-scrollbar"></div> -->
</div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
    props:["banner"],
    mounted(){
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        },
        
        
        // 如果需要滚动条
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    })        
}
}
</script>
<style scoped>
.swiper-slide{
    width: 100%;
    height: 7.5rem;
    background: red;
    text-align: center;
    line-height: 7.5rem;
    font-size: 1rem;
}
</style>
