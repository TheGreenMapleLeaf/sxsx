<template>
    <div class="home" v-scroll="flag" ref="home"  >
        <div class="header">
            <div class="header_city" @click="handlerTo()">
                <p>{{city | citys}}</p>
                <span class="iconfont icon-shang"></span>
            </div>
            
            <div class="header_search" @click="handlerToSearch()">
                <div class="header_search_input">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjdweCIgaGVpZ2h0PSIyN3B4IiB2aWV3Qm94PSIwIDAgMjcgMjciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5zdmcvaG9tZV9zZWFyY2g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i6aaW6aG1IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjY4LjAwMDAwMCwgLTcxLjAwMDAwMCkiPgogICAgICAgIDxnIGlkPSLmkJzntKIiIGZpbGw9IiNBQ0E5QTkiIHN0cm9rZT0iI0FDQTlBOSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOTIuNTA1MzQ4LDk2Ljc0MzM0MDkgTDI4OC43MzY4ODYsOTIuOTc1MjE2IEMyODYuNjQxMjExLDk0Ljc4NDcwOSAyODMuOTQ0Nzk5LDk1LjkxNzU5NyAyODAuOTU5MDU5LDk1LjkxNzU5NyBDMjc0LjM1NDY0NSw5NS45MTc1OTcgMjY5LDkwLjU2MzYzMTkgMjY5LDgzLjk1ODU2ODUgQzI2OSw3Ny4zNTMwNDUxIDI3NC4zNTQ2NDUsNzIgMjgwLjk1OTA1OSw3MiBDMjg3LjU2MzkzMyw3MiAyOTIuOTE4NTc4LDc3LjM1MzA0NTEgMjkyLjkxODU3OCw4My45NTg1Njg1IEMyOTIuOTE4NTc4LDg2Ljk0NDY0NTkgMjkxLjc4NTE4NCw4OS42NDA0ODY5IDI4OS45NzYwNzcsOTEuNzM2NTM2NiBMMjkzLjc0NDA3OCw5NS41MDQyMDE1IEMyOTQuMDg1Mzg0LDk1Ljg0NjQxMzcgMjk0LjA4NTM4NCw5Ni40MDA2Njg3IDI5My43NDM2MTgsOTYuNzQzMzQwOSBDMjkzLjQwMTg1Miw5Ny4wODU1NTMgMjkyLjg0NzU3NCw5Ny4wODU1NTMgMjkyLjUwNTM0OCw5Ni43NDMzNDA5IFogTTI5MS4wNzgxOTIsODMuOTU4NTY4NSBDMjkxLjA3ODE5Miw3OC4zNzA5NDI0IDI4Ni41NDczNzQsNzMuODM5MzkwNiAyODAuOTU4NTk5LDczLjgzOTM5MDYgQzI3NS4zNzAyODQsNzMuODM5MzkwNiAyNzAuODM5NDY2LDc4LjM3MDk0MjQgMjcwLjgzOTQ2Niw4My45NTg1Njg1IEMyNzAuODM5NDY2LDg5LjU0NzU3NDUgMjc1LjM3MDI4NCw5NC4wNzg2NjY0IDI4MC45NTg1OTksOTQuMDc4NjY2NCBDMjg2LjU0NzM3NCw5NC4wNzg2NjY0IDI5MS4wNzgxOTIsODkuNTQ4MDM0NCAyOTEuMDc4MTkyLDgzLjk1ODU2ODUgTDI5MS4wNzgxOTIsODMuOTU4NTY4NSBaIiBpZD0iaG9tZV9zZWFyY2giPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="">
                    <p>鲜活肥美鲍鱼买1送1！</p>
                </div>
            </div>
            <div class="header_code" @click="handlerToLogin()">
                <img src="data:image/png;base64,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" alt="">
                <p>会员码</p>
            </div>
        </div>

        <div class="carousel_one">
            <Carousel></Carousel>
        </div>

        <div class="green_four">
            <div>
                <img src="http://pic2.34580.cn/group1/M00/54/14/wKgNYlw9pxGAbFW9AAAHDoo9uw0348.png" alt="">
                <span>0起送0运费</span>
            </div>
            <div>
                <img src="http://pic2.34580.cn/group1/M00/68/C7/wKgNY1w9N8mAGj-4AAADoUsJVko155.png" alt="">
                <span>晚到必赔</span>
            </div>
            <div>
                <img src="http://pic2.34580.cn/group1/M00/69/38/wKgNY1w9nFWAaONrAAAHmBntHvg444.png" alt="">
                <span>100%检</span>
            </div>
            <div>
                <img src="http://pic2.34580.cn/group1/M00/54/85/wKgNYlw-DF2AKwSaAAAG4pHr6xE740.png" alt="">
                <span>包退包赔</span>
            </div>
        </div>

        <Homenav></Homenav>
        <Homegift></Homegift>
        <Homeflashsale></Homeflashsale>
        <Homedata></Homedata>
        <Homeloading></Homeloading>
        <!-- <HomeBackToTop @click="toTop()"></HomeBackToTop> -->
        <div class="backto_top" @click="toTop()" v-show="flag.vis">
            <p class="arrows"></p>
        </div>
    </div>
</template>

<script>
import Homenav from "./home_nav" ;
import Homegift from "./home_gift";
import Homeflashsale from "./home_flashsale";
import Homedata from "./home_data";
import Carousel from "./home_carousel";
import Homeloading from "./home_loading";
// import HomeBackToTop from "./home_backTo_top"
    export default {
        name:"home",
        components:{
            Homenav,
            Homegift,
            Homeflashsale,
            Homedata,
            Carousel,
            Homeloading,
            // HomeBackToTop
        },
        data() {
            return {
                city:[],
                flag:{
                    vis:false
                }
            }
        },
        filters:{
            citys(val){
                return val.slice(0,-1);  
            }
        },
        methods: {
            handlerToLogin(){
                this.$router.push("/login") 
            },
            toTop(){
                const timeTop =setInterval(() => {
                    this.$refs.home.scrollTop -= 50;
                    if (this.$refs.home.scrollTop <= 0) {
                    clearInterval(timeTop);
                    }
                }, 10);
            },
            handlerTo(){
                this.$router.push("/citylist") 
            },
            handlerToSearch(){
                this.$router.push("/search")
            },
        },
        created() {
            this.city=sessionStorage.getItem("city") || "苏州市"
        },
    }
</script>

<style scoped>
.home{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    margin-bottom: 1rem;
}
.header{
    position: fixed;
    top:0;
    background: #ffffff;
    height: 0.96rem;
    width: 100%;
    display: flex;
    z-index: 9;
}
.header_city{
    /* width: 1rem; */
    margin-left: 0.16rem;
    display: flex;
    color: #666666;
    justify-content: center;
    align-items: center;
}
.header_city p{
    font:0.28rem/1 "";
}
.header_city span{
    display: inline-block;
    font-size: 0.12rem;
    margin-left: 0.08rem
}
.header_search{
    width: 5.64rem;
    height: 0.96rem;
    padding: 0.16rem;
}
.header_search_input{
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    border-radius: 0.48rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header_search_input img{
    width: 0.3rem;
    height: 0.3rem;
}
.header_search_input p{
    font:0.28rem/0.64rem "";
    margin-left: 0.08rem;
    color: #999999;
}
.header_code{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666666;
}
.header_code img{
    width: 0.36rem;
    height: 0.36rem;
}
.carousel_one{
    margin-top: 0.96rem;
    width: 100%;
    height: 3.32rem;
    padding: 0.1rem 0.2rem 0;
    background: #ffffff;
}
.green_four{
    width: 100%;
    height: 0.68rem;
    padding: 0 0.128rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
}
.green_four div{
    display: flex;
    align-items: center
}
.green_four div img{
    display: inline-block;
    width: 0.32rem;
    margin-right: 0.04rem;
}
.green_four div span{
    font:0.24rem/0.32rem "";
}


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