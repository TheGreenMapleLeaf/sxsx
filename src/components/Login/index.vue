<template>
    <div class="page">
        <div class="content">
            <div class="city-wrapper">
                <p @click="changeCity">{{city}}</p><span class="iconfont icon-shang"></span>
            </div>
            <div class="logo">
                <img src="../../assets/logo.png" alt="">
            </div>
            <div class="bottom">
                <div class="container">
                    <input type="tel" placeholder="请输入真实有效的手机号" maxlength="11">
                </div>
                <div class="button-wrapper">
                    <p>获取验证码</p>
                </div>
                <div class="sign-btn">
                    <span>账号密码登录</span>
                </div>
                <div class="tips">
                    <p>未注册手机验证后即完成注册 </p>
                    <p>登录后：</p>
                    <p>1、账号将关联微信账号，可快捷登录微商城/小程序/APP/团购等；</p>
                    <p>2、可通过微信接受下单/取货等消息通知。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            city:[]
        }
    },created() {
        this.city=sessionStorage.getItem("city")||"苏州"
    },
    methods: {
        changeCity(){
            this.$router.push("/citylist")
        }
    },
}
</script>

<style scoped>
    .page{
        background: #fff;
        height:100%;
    }
    .city-wrapper{
        margin:.25rem .5rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: .3rem;
        color: #333; 
    }
    .city-wrapper span{
        font-size: .25rem;
        font-weight: 600;
        margin-left:.1rem;
    }
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .5rem 0 .2rem;
        color: #4aaa35;
    }
    .logo img{
        width: 26.7%;;
    }
    .bottom{
        margin-top: 1rem;
        text-align: center;
    }
    .container{
        padding: .2rem 0;
        margin: 0 .7rem;
        border-bottom: .01rem solid #dfdfdf;
    }
    .container input{
        width: 100%;
        height: .7rem;
        display: block;
        line-height: .7rem;
        font-size:.35rem;
        border: none;
        padding: 0;
        background: transparent;
        outline: none;
    }
    .button-wrapper{
        margin-top: 1rem;
        padding: 0 .5rem;
    }
    .button-wrapper p{
        opacity: .4;
        width: 100%;
        color: #fff;
        border:none;
        height: 1rem;
        font-size: .3rem;
        line-height: 1rem;
        border-radius: 3rem;
        background-image: linear-gradient(90deg,#25c949,#4aaa35);
    }
    .sign-btn{
        margin: .4rem .6rem .2rem;
        text-align: left;
        font-size: .25rem;
    }
    .tips{
        color: #999;
        font-size: .3rem;
        margin: 1.1rem 5.5% 0;
        text-align: left;
    }
</style>