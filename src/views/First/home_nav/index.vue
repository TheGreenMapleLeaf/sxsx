<template>
    <div class="home_nav">
        <div class="activity_center" v-for="(item,index) in TopCenterInfos" :key="index">
                <img :src="item.ImageUrl" alt="">
        </div>
        <div class="nav">
            <div class="nav_carousel_box">
                <ul>
                    <li v-for="(item,index) in ShortcutIcons" :key="index" @click="handlerToLogin()">
                        <img :src="item.URL" alt="">
                        <p>{{item.Name}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Homenav",
    data(){
        return{
            ShortcutIcons:[],
            TopCenterInfos:[]
        }
    },
    created() {
        this.$axios.get("/api/sh/Home/ShortcutIconRequest?sourcetype=9").then((res)=>{
            this.ShortcutIcons = res.data.Data.ShortcutIcons;
            this.TopCenterInfos = res.data.Data.TopCenterInfos;
        })
    },
    methods: {
        handlerToLogin(){
            this.$router.push("/login");
        }
    },
}
</script>

<style scoped>
.activity_center{
    width: 100%;
    height: 2.34rem;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.activity_center>img{
    width: 100%;
    height: 100%;
}

.nav{
    width: 100%;
    height: 3.44rem;
    background: #ffffff;
    padding: 0.16rem 0.16rem 0;
    overflow: hidden;
}
.nav_carousel_box{
    width: 100%;
    height: 100%;
}
.nav_carousel_box ul{
    width: 200%;
    display: flex;
    flex-wrap: wrap;
    
}
.nav_carousel_box ul li{
    width: 1.436rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.nav_carousel_box ul li>img{
    width: 0.8rem;
    height: 0.8rem;
    margin: 0.16rem 0.32rem 0;
}
</style>
