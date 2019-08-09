<template>
    <div class="home_gift" @click="handlerToLogin()">
        <img src="http://static.34580.cn/cn/xinyonghuzhuanqu/shouye1116.png" alt="">
    </div>
</template>
<script>
export default {
    name:"Homegift",
    data() {
        return {
            VoPicSettings:[],
        }
    },
    created() {
        this.$axios.get("/api/sh/members/newMemberLevel?sourcetype=9").then((res)=>{
            this.VoPicSettings=res.data.Data.VoPicSettings
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
    .home_gift{
        width: 100%;
        height: 3.72rem;
        margin:0.2rem 0;
        background: #ffffff;
    }
    .home_gift>img{
        width: 100%;
        height: 3.6rem;
    }
</style>
