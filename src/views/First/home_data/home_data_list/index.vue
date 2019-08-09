<template>
    <div class="home_data_list flashsale_list">
        <ul>
            <li v-for="(item,index) in listArr" :key="index" @click="handlerToDetails(item.ProductId)">
                <div class="img_box">
                        <img :src="item.imgUrl" alt />
                </div>
                <div class="flashsale_list_name">{{item.ProductName}}</div>
                <div class="flashsale_list_ActivityLabel">
                        <span :class="item.ActivityLabel===null?'':'activityLabel'">{{item.ActivityLabel}}</span>
                </div>
                <div class="flashsale_list_price">
                    <!-- <span class="periodMoney">{{item.PeriodMoney}}</span>/
                    <span class="unit">{{item.Unit}}</span> -->
                    <div class="periodMoney_box">
                        <div class="periodMoney">{{item.PeriodMoney | money}}</div>
                        <div class="unit">{{item.Unit}}</div>
                    </div>
                    <div class="imgbox">
                        <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiICB2aWV3Qm94PSIwIDAgNzIgNzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDcyIDcyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRTQ1NTI4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTI0LjEwMSwyMy45NDVoMy4wMzNjMCwwLDEuMTE2LDAuMjExLDEuMTE2LDEuNzI4CiAgICBsMi4yNjUsMTYuODE3YzAsMCwwLjA2OSwwLjc3NiwxLjA0NSwwLjc3NmgxNS44NTkiLz4KICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNFNDU1MjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjguNTUxLDI3LjkyaDE4Ljg2OGMwLDAsMS40NjUtMC4wMjcsMS40NjUsMS4zMTMKICAgIGMwLDAtMC42ODUsNS43OTUtMS43MDksNy44MjdjMCwwLTAuNjU5LDEuODMzLTMuMzExLDIuMTg4YzAsMC0xMy41OTMsMS42MTUtMTMuNTkzLDEuNDMyTDI4LjU1MSwyNy45MnoiLz4KICA8cGF0aCBmaWxsPSIjRTQ1NTI4IiBkPSJNMzIuNTcxLDQ1LjY4MmMwLjk0NywwLDEuNzE1LDAuNzc0LDEuNzE1LDEuNzM0YzAsMC45NTgtMC43NjgsMS43MzMtMS43MTUsMS43MzMKICAgIGMtMC45NDcsMC0xLjcxNS0wLjc3NS0xLjcxNS0xLjczM0MzMC44NTYsNDYuNDU2LDMxLjYyNCw0NS42ODIsMzIuNTcxLDQ1LjY4MnoiLz4KICA8cGF0aCBmaWxsPSIjRTQ1NTI4IiBkPSJNNDMuOTg3LDQ1LjY4MmMwLjk0NywwLDEuNzE1LDAuNzc0LDEuNzE1LDEuNzM0YzAsMC45NTgtMC43NjgsMS43MzMtMS43MTUsMS43MzNzLTEuNzE1LTAuNzc1LTEuNzE1LTEuNzMzCiAgICBDNDIuMjcyLDQ2LjQ1Niw0My4wNCw0NS42ODIsNDMuOTg3LDQ1LjY4MnoiLz4KPC9nPgo8Y2lyY2xlIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ExQTFBMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBjeD0iMzYuNDkyIiBjeT0iMzYuNTQ3IiByPSIyNS42NjciLz4KPC9zdmc+Cg==" alt="">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Homedatalist",
    data(){
        return {
            data:{},
            listArr:[],
        }
    },
    props:{
        list:{
            type:Object,
            required:false
        }
    },
    filters:{
        money(val){
            return '￥'+val.toFixed(2);
        }
    },
    watch: {
        list:{
            handler(newVal){
                let imgUrl="http://picpro-sz.34580.com/sh/ImageUrl/565521/160.jpeg"
                newVal.ProductItems.forEach((data) => {
                    data.imgUrl=imgUrl
                    //  data.PeriodMoney="$￥"+data.PeriodMoney.toFixed(2);
                });
                this.listArr=newVal.ProductItems;
            },
            deep:true,
            // immediate:true
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
        }
    },
};
</script>
<style scoped>
.home_data_list {
  width: 100%;
  padding: 0.1rem 0.2rem;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home_data_list ul li {
  padding: 0 0.1rem 0.1rem 0;
  color: #333;
}

    .flashsale_list ul{
        display: flex;
        /* overflow: hidden; */
        overflow-x: scroll;
    }
    .flashsale_list ul li{
        padding: 0 0.1rem 0.1rem 0;
    }
    .flashsale_list .img_box{
        width: 2.1rem;
        height: 2.1rem;
    }
    .flashsale_list .img_box>img{
        width: 100%;
    }
    .flashsale_list_name{
        width: 2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.28rem;
    }
    .flashsale_list_ActivityLabel{
        width: 2.1rem;
        height: 0.5rem;
        display: flex;
        align-items: center;
    }
    .activityLabel{
        max-width: 100%;
        display: inline-block;
        border: 0.02rem solid #ff550f;
        border-radius: 0.16rem;
        padding: 0.02rem 0.032rem;
        color: #ff550f;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .flashsale_list_price{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .flashsale_list_price .periodMoney{
        color: #ff0000;
        font-size: 0.28rem;
        width: 0.2rem;
    }
    .flashsale_list_price .unit{
        color: #aaaaaa;
    }
    .flashsale_list_price .imgbox{
        width: 0.72rem;
    }
    .flashsale_list_price .imgbox>img{
        width: 0.72rem;
    }
</style>
