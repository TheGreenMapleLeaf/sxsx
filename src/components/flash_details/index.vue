<template>
    <div class="flash_details">
        <div class="header">
            <div>
                抢购中 每日0点上新
            </div>
            <div>
                <p>距结束</p>
            </div>
        </div>
        <div class="flash_list">
            <ul>
                <li v-for="(item,index) in list" :key="index" @click="handlerToDetails(item.SsuId)">
                    <div class="flash_list_imgbox">
                        <img src="http://picpro-sz.34580.com/sh/ImageUrl/549866/300.jpeg" alt="">
                    </div>
                    <div class="information">
                        <div class="information_name">
                            {{item.ProductName}}
                        </div>
                        <div class="information_presentation">
                            {{item.SellPoint}}
                        </div>
                        <div class="one_box">
                            <div class="left">
                                <span class="information_ActivityLabel">
                                    {{item.ActivityLabel}}
                                </span>
                                <span class="information_PeriodMoney">
                                    {{item.PeriodMoney}}
                                </span>
                                <span class="information_DefaultMoney">
                                    {{item.DefaultMoney}}
                                </span>
                            </div>
                            <div class="shopping_imgbox">
                                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiICB2aWV3Qm94PSIwIDAgNzIgNzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDcyIDcyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRTQ1NTI4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTI0LjEwMSwyMy45NDVoMy4wMzNjMCwwLDEuMTE2LDAuMjExLDEuMTE2LDEuNzI4CiAgICBsMi4yNjUsMTYuODE3YzAsMCwwLjA2OSwwLjc3NiwxLjA0NSwwLjc3NmgxNS44NTkiLz4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNFNDU1MjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjguNTUxLDI3LjkyaDE4Ljg2OGMwLDAsMS40NjUtMC4wMjcsMS40NjUsMS4zMTMKICAgIGMwLDAtMC42ODUsNS43OTUtMS43MDksNy44MjdjMCwwLTAuNjU5LDEuODMzLTMuMzExLDIuMTg4YzAsMC0xMy41OTMsMS42MTUtMTMuNTkzLDEuNDMyTDI4LjU1MSwyNy45MnoiLz4KICA8cGF0aCBmaWxsPSIjRTQ1NTI4IiBkPSJNMzIuNTcxLDQ1LjY4MmMwLjk0NywwLDEuNzE1LDAuNzc0LDEuNzE1LDEuNzM0YzAsMC45NTgtMC43NjgsMS43MzMtMS43MTUsMS43MzMKICAgIGMtMC45NDcsMC0xLjcxNS0wLjc3NS0xLjcxNS0xLjczM0MzMC44NTYsNDYuNDU2LDMxLjYyNCw0NS42ODIsMzIuNTcxLDQ1LjY4MnoiLz4KICA8cGF0aCBmaWxsPSIjRTQ1NTI4IiBkPSJNNDMuOTg3LDQ1LjY4MmMwLjk0NywwLDEuNzE1LDAuNzc0LDEuNzE1LDEuNzM0YzAsMC45NTgtMC43NjgsMS43MzMtMS43MTUsMS43MzNzLTEuNzE1LTAuNzc1LTEuNzE1LTEuNzMzCiAgICBDNDIuMjcyLDQ2LjQ1Niw0My4wNCw0NS42ODIsNDMuOTg3LDQ1LjY4MnoiLz4KPC9nPgo8Y2lyY2xlIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ExQTFBMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBjeD0iMzYuNDkyIiBjeT0iMzYuNTQ3IiByPSIyNS42NjciLz4KPC9zdmc+Cg==" alt="">
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    name:"flash_details",
    data() {
        return {
            list:[],
        }
    },
    created() { 
        this.$axios.get("/api/sh/flash/getPageFlashSaleProducts?sourcetype=9&PageIndex=0").then((res)=>{
            this.list = res.data.Data.SourceData
        })
    },
    methods: {
        handlerToDetails(id){
            this.$router.push({
                name:"details",
                params:{
                    id:id
                }
            });
        }
    },
}
</script>

<style scoped>
    .flash_details{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: auto;
        
    }
    .header{
        width: 100%;
        height: 0.8rem;
        background: #ff3f57;
        padding: 0.16rem 0.32rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFF;
        font-size: 0.28rem;
    }

    .flash_list{
        width: 100%；

    }
    .flash_list ul{
        width: 100%;
    }
    .flash_list ul li{
        width: 100%;
        padding: 0.24rem 0.24rem 0;
        background: #FFF;
        display: flex;
        
    }
    .flash_list_imgbox{
        width: 1.8rem;
        height: 1.8rem;
    }
    .flash_list_imgbox>img{
        width: 100%;
        height: 100%;
    }
    .information{
        width: 5.06rem;
        height: 2.32rem;
        margin-left: 0.16rem;
        padding-bottom: 0.24rem;      
        color: #999;
    }
    .information_name{
        width: 100%;
        line-height: 0.4rem;
        font-size: 0.28rem;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .information_presentation{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        line-height: 0.4rem;
    }
    .one_box{
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    .one_box .left{

    }
    .one_box>.left>span{
        display: flex;
        align-items: center;
        justify-content: left
    }
    .shopping_imgbox{
        width: 0.6rem;
        height: 0.6rem;
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .shopping_imgbox>img{
        width: 100%;
    }
</style>
