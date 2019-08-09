<template>
	<div class="search">
	    <ul>
			<li>
			   <h1  class="back" @click="go"><</h1>
			</li>
			<li >
			   <input type="search"  placeholder="西瓜">
			</li>
			<li>
			   <button> 搜索 </button>
			</li>
		</ul>
         
		<div id="section">
		<ul>
            <router-link 
            v-for="(item,index) in navs"
            :key="index"
            :to="item.path"
            tag="li"
            >
            <span>{{item.text}}</span>
            </router-link>
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
				<polygon fill="#CCCCCC" points="9,14 16,7 23,14 "></polygon>
				<polygon fill="#CCCCCC" points="23,18.001 16,25.001 9,18.001 "></polygon>
				</svg>
			</div>
        </ul>
        </div>
        <router-view></router-view>
        <div class="goodsbody">

            
            <div class="inner" v-for="(item in SourceData" >
            <img  :src="item.img ">
            
            <p>{{item.ProductName}}</p>
            <div class="msg">
            <a>1.99/500g</a>
            <div class="price">
            <span>¥15.92</span>
          </div>
            </div>
            </div>
            
       
        </div> 
</div>
</template>

<script>
	export default{
		data(){
        return {
            goodsvalue:"",
            SourceData:[
            // {
                    
            //         img:"http://picpro-sz.34580.com/sh/ImageUrl/564988/500.jpeg"
            //     },
            //     {
                    
            //         img:"http://picpro-sz.34580.com/sh/ImageUrl/549924/500.jpeg"
            //     },
            //     {
                    
            //         img:"http://picpro-sz.34580.com/sh/ImageUrl/564988/500.jpeg"
            //     },
            //     {
                    
            //         img:"http://picpro-sz.34580.com/sh/ImageUrl/564988/500.jpeg"
            //     },
            //     {
                    
            //         img:"http://picpro-sz.34580.com/sh/ImageUrl/564988/500.jpeg"
            //     },
            //     {
                    
            //         img:"http://picpro-sz.34580.com/sh/ImageUrl/564988/500.jpeg"
            //     },
            ],
            navs:[
                {
                    
                    text:"默认",
                    path:"/home/mart/search/goods/default"
                },
                {
                   
                    text:"最新",
                    path:"/home/mart/search/goods/new"
                },
                {
                   
                    text:"销量",
                     path:"/home/mart/search/goods/num"
                },
                {
                   
                    text:"价格",
                     path:"/home/mart/search/goods/price"
                }
            ],
           
        }
    },
    watch:{
    $route:{
      handler(newV){
        this.type=newV.params.type;
        // this.getData();

      },
      deep:true,
      immediate:true
    }
   },
   created(){
    
        this.$axios.get("/api/sh/ProductRequests/SearchProductRequest?sourcetype=9&Keyword=%E8%A5%BF%E7%93%9C&PageIndex=1&PageSize=20&OrderDirectionType=0&OrderFieldType=0&mode=1").then((res)=>{
            this.SourceData=res.data.Data.SourceData;
            console.log(res)
             
        })
    },
		methods:{
	 	go(){
	 		this.$router.go(-1);
	 	},
       //  godetial(id){
       //  this.$router.push('/detial'+id);
       // }
	    }
    }
</script>

<style scoped>
    .price{
        margin: -.4rem -1.8rem;
    padding: 1rem 0.5rem;
}
    .msg{
          display: flex;
    color: #999899;
    font-size: 14px;
    width: 100%;
    padding: 0 .5rem ;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    }
    .inner p{
    padding: .3rem .5rem 0;
    width: 3.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px
    }
    .inner img{width:3.36rem;height:3.36rem;}
    .inner{
    padding-left: .2rem;
    height: 5.4rem;
    display: inline-table;
    width: 3.4rem;
    border-radius: .25rem;
    overflow: hidden;
    position: relative;
    }
    .goodsbody ul{
         flex: 1;
         height: 100%;
         overflow: auto;
    }
    .goodsbody ul li{
       height: 5.4rem;
    }
    .goodsbody{
        overflow: auto;
        height: 100%;
        border-top: 1.5rem solid #f0f0f0;}
.icon{
width:0.48rem;
height: 0.48rem;
padding-right: .2rem;}
#nav{height: 1rem;}
.search{
height: 100%;
width:100%;
background: #FFF;
}
.search ul{
display: flex;
padding: 0.24rem 0.16rem;

}
.search ul li{
flex:1;
list-style: none;
}

input {
overflow: visible;
background: #f0f0f0;
padding: 0 .5rem;
width: 4.5rem;
border-radius: 5px;
height: 0.64rem;
border: none;
outline: none;
border: none;
outline: none;
}
li button{
background-color: #4cd964;
color: #fff;
border: none;
width: 1.2rem;
height: 0.64rem;
border-radius: 5px;
}
button, input, optgroup, select, textarea {
font-family: sans-serif;
font-size: 100%;
line-height: 1.15;
margin: 0 12px;
}
.back{
background: #f0f0f0;
opacity: 0.7;
border-radius: 50%;
width: 0.5rem;
height: 0.5rem;
text-align: center;
line-height: 0.5rem;
z-index:5;
position: fixed;
top:0.2rem;
left:0.2rem;
}
#section{
width: 100%;
/*line-height: 0;*/
position: fixed;
left: 0;

background: #fff;
border-top: 16px solid #f0f0f0;
}

#section ul,#section ul li{
height: 1rem;
width: 100%;
height: 100%;
}
#section ul{
display: flex;
}
#section ul li{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size:.3rem
}
/*#section ul li i{
font-size:.4rem;
}*/

#section  .router-link-exact-active  span{
background: #fff;
border-bottom: 2px solid #45ac2a;
color: #45ac2a;
}
</style>