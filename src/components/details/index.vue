<template>
    <div class="page">
        <div class="title">
            <router-link class="title-item" tag="div" to="/details/product">
                <span>商品</span>
            </router-link>
            <router-link class="title-item" tag="div" to="/details/particulars">
                <span>详情</span>
            </router-link>
            <router-link class="title-item" tag="div" to="/details/evaluate">
                <span>评价</span>
            </router-link>
        </div>

        <div class="bottom">
            <ul >
                <router-link v-for="(item,index) in list" :key="index" :to="item.path" tag="li">
                    <span :class="item.icon"></span>
                    <p>{{item.text}}</p>
                </router-link>
            </ul>
            <button>加入购物车</button>
        </div>
        <router-view />
    </div>
</template>

<script>

export default {
    data() {
        return {
            list:[
                {icon:"iconfont icon-kehufuwu",text:"客服",path:""},
                {icon:"iconfont icon-xin",text:"收藏" ,path:"/login"},
                {icon:"iconfont icon-gouwuche",text:"购物车",path:"/home/cart"}
            ],
            

        }
    },

}
</script>

<style scoped>
.page{
    height: 100%;
    width: 100%;
}
.title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: .8rem;
    background: #fff;
}
.title .title-item{
    display: flex;
    flex:0 0 33.3333%;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: .3rem;
}
.title .router-link-exact-active{
    color:#49aa34;
}

.bottom{
    position:fixed;
    left:0;
    bottom:0;
    width: 100%;
    height: 1rem;
    background: #fff;
    display: flex;
    align-items: center;
    z-index: 10;
}
.bottom ul{
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.bottom ul li{
    display: flex;
    flex-direction: column;
    font-size: .25rem;
    color:#999;
}
.bottom ul li span{
    font-size: .4rem;
}
.bottom ul li:nth-child(1) span{
    color:skyblue;
}
.bottom button{
    width: 33%;
    margin-left:5%;
    height: .9rem;
    background: linear-gradient(90deg,#ff705b,#ff3f57);
    color: #fff;
    border-radius: .4rem;
    border: none;
}
</style>
