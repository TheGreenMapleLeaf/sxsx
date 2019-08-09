<template>
    <div class="home">
        <div class="tabBar">
        <ul>
            <router-link 
            v-for="(item,index) in tabBar"
            :key="index"
            :to=item.path
            tag="li"
            >
                <span :class=item.icon></span>
                <h4>{{item.content}}</h4>
            </router-link>
        </ul>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            tabBar:[
                {
                    path:"/home/first",
                    icon:"iconfont icon-icon",
                    content:"首页"
                },
                {
                    path:"/home/mart",
                    icon:"iconfont icon-leimupinleifenleileibie",
                    content:"分类"
                },
                {
                    path:"/home/cart",
                    icon:"iconfont icon-gouwuche",
                    content:"购物车"
                },{
                    path:"/home/user",
                    icon:"iconfont icon-wodequanzi",
                    content:"我的"
                }
            ]
        }
    },
};
</script>

<style >
    .home{
        height: 100%;
    }
    .tabBar{
        width: 100%;
        height: 1rem;
        position: fixed;
        left:0;
        bottom:0;
        color: #999;
        font-size:.3rem;
        background: #fff;
        z-index: 100;
    }
    .tabBar span{
        font-size: .4rem;
    }
    .tabBar h4{
        font-weight:300;
        font-size: .24rem;
        line-height: .5rem
    }
    .tabBar ul,.tabBar li{
        display: flex;
        width: 100%;
        height: 100%;
    }
    .tabBar li{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .tabBar li:nth-child(1){
        font-weight:900;
    }
    .tabBar .router-link-active{
        color:rgb(73, 170, 52);
    }
</style>

