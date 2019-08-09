<template>
<div class="nav1">
	<div class="head">
	<ul>
		<li>
		<h1  class="back" @click="go"><</h1>
		</li>
		<li >
		<input type="search"  v-model="goodsvalue" placeholder="全城热恋，这些鱼虾ta爱吃">
		<!-- v-model="goodsvalue"  -->
		</li>
		<li>
		<button> 搜索 </button>
		</li>
	</ul>
	</div>
	<div class="search-hotword">
	  <p class="title">热门搜索</p> 
		<div class="lists">
			<p class="item" @click="gogoods()">西瓜</p>
			<p class="item">酸奶</p>
			<p class="item">冰淇淋</p>
			<p class="item">小龙虾</p>
			<p class="item">杨梅</p>
			<p class="item">鲜奶</p>
			<p class="item">虾仁</p>
			<p class="item">防晒</p>
			<p class="item">牛肉</p>
		</div>
	</div>
	<div class="search-recent">
		<p class="title">最近搜索</p> 
		<div class="lists1">
			<div class="item1">
				<a >清空搜索历史</a> 
				
            </div> 
            
        </div>
    </div>
</div>
</template>
<script>
export default {
	data(){
		return{
			goodsvalue:"",
			// Data[],
			goodslist:[]
		}
	},
	// create(){
    watch:{
    	async goodsvalue(newvalue,oldvalue){
    		console.log(newvalue)
    	}
    	},
    
    created(){
    	this.$axios.get("/api/sh/Products/ProductHotWordRequest?sourcetype=9").then((res)=>{
            this.Data=res.Data;
            console.log(res)
        })
    },
	
	methods:{
	 	go(){
	 		this.$router.go(-1);
	 	},
	 	gogoods(){
        this.$router.push('/home/mart/search/goods/:type')
    },
	 },


}
</script>
<style scoped>
html{
background-color: #f2f2f2;
width: 100%;
height:100%;
color: #333;
}
.lists1{
	width:100%;
	height:0.8rem;
	background: #fff;
}
.item1{
	padding: 0.16rem 0.32rem;
	font-size: 0.3rem;
	text-align: center;
}

.title{
	margin-left: 3%;
    padding: .24rem 0 .16rem;
}
.lists .item{
flex: 0 0 30%;
text-align: center;
background: #fff;
margin: 1.5%;
font-size: .3rem;
padding: .3rem 0;
}
.search-hotword .title{
margin-left: 3%;
padding: .3rem .1rem;
}
.search-hotword .lists{

display: flex;
-webkit-flex-wrap: wrap;
flex-wrap: wrap;
}
.head{

width:100%;
background: #FFF;
}
.head ul{
display: flex;
padding: 0.24rem 0.16rem;
}
.head ul li{
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
.nav{
width:100%;
height:100%;

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
</style>