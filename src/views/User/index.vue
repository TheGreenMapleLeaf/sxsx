<template>
  <div class="page">
    <div class="user">
      <div class="user-information">
        <router-link class="left" to="/login" tag="div">
          <img src="../../assets/user.png" alt />
          <p class="name">登录/注册</p>
        </router-link>
        <router-link class="right"  to="/login" tag="div">
          <span class="iconfont icon-huiyuanma"></span>
          <p>会员码</p>
        </router-link>
      </div>
      <div class="user-order">
        <ul>
          <li v-for="(item,index) in list1" :key="index">
            <span :class=item.icon></span>
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
      <div class="user-detail">
        <ul>
          <router-link to="/login" tag="li">
            <span style="color:red">0.00</span>
            <p>余额</p>
          </router-link>
          <router-link to="/login" tag="li">
            <span>0.00</span>
            <p>预付</p>
          </router-link>
          <router-link to="/login" tag="li">
            <span>0</span>
            <p>积分</p>
          </router-link>
          <router-link to="/login" tag="li">
            <span>0</span>
            <p>优惠券</p>
          </router-link>
        </ul>
      </div>
      <div class="user-links" >
        <router-link tag="div" v-for="(item,index) in list2" :key="index" :to="item.path" class="items">
          <span :class="item.icon"></span>
          <p>{{item.text}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list1:[
        {icon:"iconfont icon-dingdan",text:"全部订单"},
        {icon:"iconfont icon-peisong",text:"待配送"},
        {icon:"iconfont icon-zi",text:"待自提"},
        {icon:"iconfont icon-pingjia",text:"待评价"},
        {icon:"iconfont icon-tui",text:"轻松退"}
      ],
      list2:[
        {icon:"iconfont icon-chongzhi",text:"充值",path:"/login"},
        {icon:"iconfont icon-dizhi",text:"地址管理",path:"/login"},
        {icon:"iconfont icon-xin",text:"收藏",path:"/login"},
        {icon:"iconfont icon-liulanjiluzuji",text:"浏览记录",path:"/login"},
        {icon:"iconfont icon-qiabao",text:"食行卡",path:"/login"},
        {icon:"iconfont icon-kehufuwu",text:"客户服务",path:"/login"},
        {icon:"iconfont icon-bangzhuzhongxin",text:"帮助中心",path:"/login"},
        {icon:"iconfont icon-hezuo",text:"商务合作",path:"/login"},
        {icon:"iconfont icon-zhifu",text:"食行粮票",path:"/login"}
      ]
    }
  },
};
</script>

<style scoped>
.page {
  background: #f2f2f2;
  height: 100%;
  overflow: auto;
  padding-bottom:1.5rem;
}
.user {
  color: #333;
  width: 100%;
}
.user-information {
  height: 4.2rem;
  background: url("../../assets/user_bg1.png");
  background-size: cover;
  padding: 1.4rem 0.32rem;
}
.user-information img {
  height: 100%;
}
.left {
  display: flex;
  align-items: center;
  width: 3rem;
  height: 1.4rem;
  float: left;
}
.left img {
  width: 1.4rem;
  height: 100%;
  margin-right: 0.2rem;
}
.name {
  color: #fff;
  font-size: 0.3rem;
}
.right {
  color: #fff;
  display: inline-block;
  width: 0.6rem;
  height: 1rem;
  font-size: 0.2rem;
  text-align: center;
  float: right;
  margin-top: 0.4rem;
}
.user-order {
  width: 100%;
  height: 1.45rem;;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding:.24rem;
  font-size: .28rem;
}
.user-order ul{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user-order li{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-order li span{
  font-size: .5rem;
}
.user-detail{
  margin-top:.32rem;
}
.user-detail ul{
  display: flex;
  background: #fff;
}
.user-detail ul li{
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .3rem;
  margin:.32rem 0;
}
.user-detail ul li span{
  margin-bottom:.1rem;
  font-size: .3rem;
}
.user-links{
  margin-top:.32rem;
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  background: #fff;
}
.user-links .items{
  font-size: .28rem;
  width: 25%;
  height: 1.62rem;
  padding:.32rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.user-links .items span{
  font-size: .4rem;
  margin-bottom:.1rem;
}
</style>