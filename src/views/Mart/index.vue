<template>
  

<div data-v-e73a4f8c=""     class="fresh-row" ><div data-v-faab507c=""   @click="gosearchone()"  data-v-e73a4f8c="" class="fresh-search-bar"><div data-v-faab507c="" class="fresh-search-bar-control"><div data-v-e73a4f8c="" data-v-faab507c="" class="keyword-wrapper"><span data-v-e73a4f8c="" data-v-faab507c=""><span data-v-e73a4f8c="" class="mn-icon" data-v-faab507c="" style="width: 30px; height: 30px;">
<span class="mn-icon-svg"  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
<path d="M28.019 26.544l-7.081-7.088c1.3-1.625 2.081-3.694 2.081-5.944 0-5.256-4.256-9.512-9.5-9.512-5.25 0-9.5 4.263-9.5 9.512s4.256 9.513 9.5 9.513c2.262 0 4.338-0.794 5.969-2.113l7.075 7.088 1.456-1.456zM7.506 19.538c-1.606-1.606-2.487-3.744-2.487-6.019s0.888-4.412 2.487-6.019 3.744-2.5 6.013-2.5c2.269 0 4.406 0.888 6.012 2.494s2.488 3.744 2.488 6.019-0.887 4.412-2.488 6.019c-1.606 1.606-3.744 2.494-6.012 2.494-2.269 0.006-4.406-0.881-6.013-2.488z">
</path>
</svg></span> <!----></span></span> <span data-v-e73a4f8c="" data-v-faab507c="" class="keyword-content">
鸡头米超级单品节 赠冰糖+桂花
</span></div></div></div>
    

<div class="list">

  <router-link v-for="(item,index) in " tag="li" to="/mart/one"><span>推荐分类</span></router-link>
  <router-link tag="li" to="/mart/two"><span>蔬菜豆菇</span></router-link> 
  <router-link tag="li" to="/mart/three"><span>新鲜水果</span></router-link> 
  <router-link tag="li" to="/mart/four"><span>鲜肉蛋禽</span></router-link> 
  <router-link tag="li" to="/mart/five"><span>水产海鲜</span></router-link> 
  <router-link tag="li" to="/mart/six"><span>乳品烘焙</span></router-link>
  <router-link tag="li" to="/mart/seven"><span>面点速食</span></router-link>
  <router-link tag="li" to="/mart/eight"><span>名厨配菜</span></router-link> 
  <router-link tag="li" to="/mart/nine"><span>粮油调味</span></router-link> 
  <router-link tag="li" to="/mart/ten"><span>冰淇淋</span></router-link> 
  <router-link tag="li" to="/mart/elven"><span>休闲零食</span></router-link> 
  <router-link tag="li" to="/mart/twelve"><span>酒水饮料</span></router-link>
  <router-link tag="li" to="/mart/thirteen"><span>厨卫百货</span></router-link> 
  <router-link tag="li" to="/mart/fourteen"><span>个护美妆</span></router-link>
  <router-link tag="li" to="/mart/thirteen"><span>七夕永生花</span></router-link> 
  <router-link tag="li" to="/mart/fourteen"><span>营养保健</span></router-link>    
 
</div>
 
  <router-view></router-view>
  <!-- <div class="food" > -->
    
     <!-- <img  src="http://pic2.34580.cn/group1/M00/9B/9E/wKgNYlzcNvWAKGh9AAFi3QgY2DI471.jpg">
     <div class="Product"> 
     <div class="section" v-for="(item,index) in HotCategoryList" >
      <img src="http://picpro-sz.34580.com/sh/ImageUrl/517183/160.jpeg">
       <a>{{item.Name}}</a>
     
      </div>
     </div>   -->
    <!--  <div class="category-section">
       <div class="category-section-title">
         <h4>爆款直降</h4>
         <strong><a>全部</a>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path d="M12 8l8 8-8 8z"></path>
          </svg>
          </strong>
       </div>
       <div class="category-square">
         <img src="http://picpro-sz.34580.com/sh/ImageUrl/562650/160.jpeg">
         <p clpss="title">30减10券</p>
       </div>
     </div> -->
    
  <!-- </div> -->
   
    
    </div>
    
      </div>

      </div>
</template>

<script>

// import {list_now_api} from "../api/list.js"
export default {
  // async created(){
  //   let data = await list_now_api(this.message);
  //   console.log(data);
  // },
  // name:"list";
  // watch:{
  //   $route:{
  //     handler(newV){
  //       this.type=newV.params.type;
  //       // this.getData();

  //     },
  //     deep:true,
  //     immediate:true
  //   }
  //  },
  data() {
    return {
        // type:'',
        list:[],
        // HotCategoryList:[]
    }
  },
  // created(){
    
  //       this.$axios.get("/api/wx/Products/HotCategoryRequest?sourcetype=9").then((res)=>{
  //           this.HotCategoryList=res.data.Data.HotCategoryList;
  //           console.log(res)
     
             
  //       })
  //   },
 
  
  methods:{
    gosearchone(){
         this.$router.push('/home/mart/searchone')
    },
      
  
 }

    } 

</script>

<style scoped>
  
.fresh-row{display: flex;}
.hua{overflow:hidden;}
.mn-icon {
display: inline-block;
fill: currentColor;
text-align: center;  
}
.fresh-search-bar[data-v-faab507c] {
padding: 0.1rem 0.1rem 0.2rem 0.1rem;
border-bottom: 1px solid #ddd;
width: 95%;
height: auto;
background: #fff;
height: 1rrem;
margin: 0.2rem;
top: -10px;
left: 0;
position: fixed;
}
.fresh-search-bar-control[data-v-faab507c] {
background: rgba(51,51,51,.06);
height: 0.64rem;
border-radius: 1rem;
font-size: .3rem;
text-align: center;
color: #999;
display: flex;
justify-content: center;
align-items: center;
box-sizing: inherit;
}
span.keyword-content {
padding-top:0.3rem;
}

.list{
width: 2rem;
    /* height: auto; */
    overflow: auto;
    float: left;
    height: -webkit-fill-available;
    background: rgba(51,51,51,.06);
        margin-top: .96rem;
  }
.list>li{
height:0.92rem;
line-height:0.92rem;
list-style:none;
font-size:16px;
border: 1px solid #dfdfdf;
}
.list>li>span{
display: block;
text-decoration: none;
height: 46px;
line-height: 46px;
text-align: center;
}
.list .router-link-exact-active span {
color: #45ac2a;
background: #fff;
border-left: 3px solid #45ac2a;
}
.goods{
width:5.2rem;
height:auto;

}

.list.router-link-exact-active span{
background: #fff;
border-left: 3px solid #45ac2a;
color: #45ac2a;
}
.pic{
  overflow:auto;
  height:100%;
  width:100%;
}
/*.section{display:flex;}*/
/* 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */

.goods{
width:5.2rem;
height:auto;

}


</style>