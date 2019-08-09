<template>
    <div class="home_loading">
        <div class="like_title">
            <div class="like_title_line"></div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAABGdBTUEAALGPC/xhBQAABqBJREFUWAmlV2uIVVUU/vZ4HSsfpNZoyVg6Y1aWf6yITNKwgkwqRAKTCoIKy8LK0EpnnEqNoRA1hSwiSyuJIiEqMKWH+egl+cDUMJ3QcdJpGsdxZu69Z/ettc869+idC0WbuWets/Z6fHvttdfZA8TDP37xSWGdPPyzQz1OZqE/v6i62dtYNaOtoDFsIrB5vRjQZHblcv/IRbcJ73ztMI+22L6tCxmRor5BCaYPjAWzK0ME+DhsXfUodGR3oSsP/XUKjeDeOu7gF49Y4hcMNyAF+vWa435af18GX7Ye3gPPXRri2POtJwbCuRBCZLo6ug1hSBlGQujCVKF2VDlaW3Zy4oh7rXGCOQorn3+pR6dY5RQcsuqpwb19YqjzL1W3oiPXV1CrgkzGq0C2x+AMoqivIll8yLwGev8FQNTVWKZvXETRkJVxUIEwBMnGpSrQx6zLKVN4TP7C6vk4nVvQHQa3+oQrc88eqKOf7xJz9Uzr8h6DRRb8xLNectHV1ox81Bt5asovx1UpH1Pv6tybTTXmUB34dTTc095ZUOR03gzFEflcTM1x5L9z7zaPdX7T+Aw2N2Q1UkSly24B7n09BNj3DbD8HmDJYaYjlBYerPDUdeo08i2ORbuLglEQY/G+4KCh657u39qEF++oMLSsJndEU0Fb1iewYnL3hiZdNLlC2XifQg5erBJYqWRR5apJwPQVZgY8UQW08+xZDgJdnuyCrx1+iGUztChZZzu25HIb3RtNxxIHFsq/NGwQTkb7kMv302iJA64v71fSaIbpCi1yIEI/p/JWZP1cZnoMcjhKZBtQMXCWq93dJfPpcYYDP394LbpyNcmOWHShuks4hfP6DXTLDnSak8QBc3CYsCsDbIEbJ1WNqZ4upihztXvn2C5xosfJ11V9y8bAZpP4swAUURZvWTLtszu17MWBrx/NffVjE6XENOVMnSQTgfn16AlhMsi171WJnk/CfmE/0KM8KM0ZCYyZAkxdGN43vw+seiwGGvXxD43pyZ7CIrLimPAUcNOjQbnU8wG2EtOPsKzMOoPqV40tZVZCHk3kWUjNbV+TeinFxrmRxHp3UWhqpvvzh9xv9s5SY10NZ+KIIbE/0kEaAvnneWi6G41M7hcrz5xxfjFzULasII3hPTOUHby9IN5GZDU3FpWJW/f3BrXwdcPDceYuFiqOaIZdBxzcAZymMytnK+8ItW5t84KQg3PdoLAbtj4JTv7AViI5HXgJFU+zfhvEWLTUgZv9WxPKwTZNLVMSXozSI7xvcaubucYwzlbhd/CS1/j1mpEcJi0ari3yrejhR7oVfzaasdAiB+lJ4bXBnIrmI8J0Ou2nx1pQSh3IETcq+SvIW6m/BuW+7uyA4jM9ugWgQTv9R3RyA5tRcCzBNCDN09T4NBCVCTjqSga824Ke7m5poengwp8BwNdXVaDdf6+92YxFS51QYMHSNM3r6TB90rPBAw3olbk2DSQ5SeEjHx1jSrnBxCUABJ44NZjdtSWqBOWYmF3igHLtVDpfifZso592fg3fdKhrv3DEUuTzM8MeUi6r0pXFdBCvI9ffB1SPA1r4Gd32AfADD5d0acvAkFHA5LnAkCuAw78AOz4Hvlkbzo+AsmwkvFvu3v9rJr/sI29m//hSg5szUeYf+lwIPMnrQaaXoi16NDDQT58Ad84rmkoE9VM6sPurcxL/SQwi8f6WDHw0J851sLF9lLe7Xi4dXOYrR4ef8KXG7Y+3Ys/XBCBL5zhjW90c9jJ/TbKHqkAN2/P2FrX5X4/jv4dblQFQHAygW4FrCADc1BJjPff0xMESk/9CfLoVWDvv/FDItqqUXZk/wlPgNqREZONUiTDL68Or44FP6+Ttv419W3gfu0x6scSQ/Q72isNilG0I99OtfzSx2/fX2DJnFSvnX4b1gXEPA5OeC7JSz0P8eiydBrTy0mB+pPCs+Mw/zxP6VlUEPHI16Wo/wKPYV6tflfgQ1GZoVMBU8KM5tZ6fq2sDjJajwMfM0vaPQwLNTk6S8PzTIys0+GkDela791KXS73m7+3YSIOxqqSKtLDAQtO8OUvLjDcAoqPZk8BEI+8eWzBgwAS7HhZVhpd/HqP8ZzSsLKCnpTq1Fci78SnnSbCUvoGRNhxlbrcrJa10FAGwCb+0uheacnO56qcZvHchK9SwlQpN8woqbmIB8Cm24Vd4IV5oKzb/RksCMAWjepftaB3P6/qdXP6VzNDFDC4/vvLfHB8dQR57WPHrMXjApu6u8uYrTf8BbgsC/YnAYgsAAAAASUVORK5CYII=" alt="">
            <div class="like_title_text">猜你喜欢</div>
            <div class="like_title_line"></div>
        </div>

        <div class="like_list">
            <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="HasNextPage" infinite-scroll-distance="10">
                <li v-for="(item,index) in data" :key="index" @click="handlerToDetails(item.ProductId)">
                    <div class="like_list_imgbox">
                        <img src="http://picpro-sz.34580.com/sh/ImageUrl/501591/500.jpeg" alt="">
                    </div>
                    <div class="like_list_name">{{item.ProductName}}</div>
                    <div class="like_list_discounts">
                        <span :class="item.ActivityLabel===null?'':'activityLabel'">{{item.ActivityLabel}}</span>
                    </div>
                    <div class="like_list_price">
                        <div class="price">
                            <span class="periodMoney">{{item.PeriodMoney | money}}</span>/
                            <span class="unit">{{item.Unit}}</span>
                        </div>
                        <div :class="item.MaxUnitPeriodMoney===null ? 'max_price_none' : 'max_price'">
                            <span class="max">{{item.MaxUnitPeriodMoney | money}}</span>
                            <span class="tag">Max</span>
                        </div>
                        <div class="unitPeriodMoney">
                            <span>每份约{{item.UnitPeriodMoney|money}}</span>
                        </div>
                        <div class="shopping_cartImg">
                            <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiICB2aWV3Qm94PSIwIDAgNzIgNzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDcyIDcyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRTQ1NTI4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTI0LjEwMSwyMy45NDVoMy4wMzNjMCwwLDEuMTE2LDAuMjExLDEuMTE2LDEuNzI4CiAgICBsMi4yNjUsMTYuODE3YzAsMCwwLjA2OSwwLjc3NiwxLjA0NSwwLjc3NmgxNS44NTkiLz4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNFNDU1MjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjguNTUxLDI3LjkyaDE4Ljg2OGMwLDAsMS40NjUtMC4wMjcsMS40NjUsMS4zMTMKICAgIGMwLDAtMC42ODUsNS43OTUtMS43MDksNy44MjdjMCwwLTAuNjU5LDEuODMzLTMuMzExLDIuMTg4YzAsMC0xMy41OTMsMS42MTUtMTMuNTkzLDEuNDMyTDI4LjU1MSwyNy45MnoiLz4KICA8cGF0aCBmaWxsPSIjRTQ1NTI4IiBkPSJNMzIuNTcxLDQ1LjY4MmMwLjk0NywwLDEuNzE1LDAuNzc0LDEuNzE1LDEuNzM0YzAsMC45NTgtMC43NjgsMS43MzMtMS43MTUsMS43MzMKICAgIGMtMC45NDcsMC0xLjcxNS0wLjc3NS0xLjcxNS0xLjczM0MzMC44NTYsNDYuNDU2LDMxLjYyNCw0NS42ODIsMzIuNTcxLDQ1LjY4MnoiLz4KICA8cGF0aCBmaWxsPSIjRTQ1NTI4IiBkPSJNNDMuOTg3LDQ1LjY4MmMwLjk0NywwLDEuNzE1LDAuNzc0LDEuNzE1LDEuNzM0YzAsMC45NTgtMC43NjgsMS43MzMtMS43MTUsMS43MzNzLTEuNzE1LTAuNzc1LTEuNzE1LTEuNzMzCiAgICBDNDIuMjcyLDQ2LjQ1Niw0My4wNCw0NS42ODIsNDMuOTg3LDQ1LjY4MnoiLz4KPC9nPgo8Y2lyY2xlIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ExQTFBMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBjeD0iMzYuNDkyIiBjeT0iMzYuNTQ3IiByPSIyNS42NjciLz4KPC9zdmc+Cg==" alt="">
                        </div>
                    </div>
                </li>
            </ul>
            <div class="bottom_img">
                <img src="../../../assets/logo.png" alt="">
            </div>
        </div>

    </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui';
import {Toast} from 'mint-ui';
export default {
    name:"home_loading",
    data() {
        return {
            data:[],
            HasNextPage:false,//表示可以发请求  true表示不能发请求
            PageIndex:0,
        }
    },
    methods: {
        handlerToDetails(id){
             this.$router.push({
                name:"details",
                params:{
                    id:id
                }
            });
        },
        loadMore(){
            if(this.PageIndex<4){
                this.PageIndex++;
                this.getDate();
            }else{
                Toast({
                    message:"已经到底了",
                    position:"bottom",
                    duration:2000
                })
                return
            }
        },
        getDate(){
            this.$axios.get(`/api/sh/floors/recommendFloor?sourcetype=9&PageIndex=${this.PageIndex}`).then((res)=>{
                this.data=this.data.concat(res.data.Data.SourceData);
                this.PageIndex=res.data.Data.PageIndex;
            })
            this.HasNextPage=false;
        }
    },
    filters:{
        money(val){
            return "￥"+Number(val).toFixed(2);
        }
    },
    created() {
        this.getDate()
    },
}
</script>

<style scoped>
    .like_title{
        width:100%;
        height: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f2f3f7;
    }
    .like_title_line{
        background: #dfdfdf;
        width: 0.7rem;
        height: 0.02rem;
        margin:0 0.32rem;
    }
    .like_title>img{
        width: 0.32rem;
        margin-right: 0.12rem;
    }
    .like_title_text{
        color: #333;
        font-size: 0.32rem;
        font-weight: 700;
    }
    .like_list{
        width: 100%;
        padding: 0.2rem;
        background: #ffffff;
    }
    .like_list ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    .like_list ul li{
        width: 3.49rem;
        height: 6rem;
        color: #333;
        font-size: 0.32rem;
        
    }
    .like_list_imgbox>img{
        width: 3.49rem;
    }
    .like_list_name{
        width: 100%;
        height: 0.58rem;
        padding: 0.16rem 0.16rem 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.28rem;
        font-weight: 700;
    }
    .like_list_discounts{
        width: 100%;
        height: 0.48rem;
        display: flex;
        align-items: center;
        padding-left: 0.16rem;
    }
    .activityLabel{
        max-width: 100%;
        display: inline-block;
        border: 0.02rem solid #ff550f;
        border-radius: 0.16rem;
        padding: 0rem 0.128rem;
        color: #ff550f;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font: 0.24rem/0.34rem "";
        background: #fff0ea
    }
    .like_list_price{
        width: 100%;
        height: 1.28rem;
        padding: 0 0.16rem;
        margin-bottom: 0.16rem;
        position: relative;
    }
    .like_list_price .price{
        color: #999;
        width: 0.4rem;
        font-size: 0.32rem;
        display: flex;
        align-items: center;
    }
    .like_list_price .price .periodMoney{
        color: #f05423;
    }
    .like_list_price .price span{
        display: inline-block;
    }
    .like_list_price .max_price{
        width: 100%;
        height: 0.48rem;
        display: flex;
        align-items: center;
    }
    .max_price_none{
        visibility: hidden;
    }
    .like_list_price .max_price .max{
        display: inline-block;
        font-size: 0.28rem;
        color: #333;
    }
    .like_list_price .max_price .tag{
        display: inline-block;
        background: #514e4a;
        color: #dfc495;
        font-size: 0.24rem;
        padding: 0 0.064rem;
        height: 0.32rem;
        width: 0.5676rem;
        margin-left: 0.05rem;
    }
    .unitPeriodMoney{
        height: 0.36rem;
        width: 100%
    }
    .unitPeriodMoney span{
        font-size: 0.24rem;
        color: #666;
        font-family: '-apple-system';
    }
    .shopping_cartImg{
        position: absolute;
        width: 0.64rem;
        z-index: 2;
        bottom:0;
        right: 0;
    }
    .shopping_cartImg>img{
        width: 100%;
    }
    .bottom_img{
        padding-bottom: 1rem;
    }
</style>
