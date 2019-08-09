<template>
 <div class="food" >
 <img  src="http://pic2.34580.cn/group1/M00/9B/9E/wKgNYlzcNvWAKGh9AAFi3QgY2DI471.jpg">
     <div class="Product"> 
     <div class="section" v-for="(item,index) in HotCategoryList" >
      <img src="http://picpro-sz.34580.com/sh/ImageUrl/517183/160.jpeg">
       <a>{{item.Name}}</a>
     
      </div>
     </div> 
     </div> 
</template>

<script>
	export default {
		data(){
			return{
				HotCategoryList:[]
			}
		},
		created(){
    
        this.$axios.get("/api/wx/Products/HotCategoryRequest?sourcetype=9").then((res)=>{
            this.HotCategoryList=res.data.Data.HotCategoryList;
            console.log(res)
     
             
        })
    },
 
	}
</script>
<style scoped>
	.food{
    margin: 1.1rem 0 0 .1rem;
    width: 5.4rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    height: -webkit-fill-available;
  
    /* display: -webkit-box; */
    /*display: -ms-flexbox;
    flex-direction: column;
    
*/
}
.section {
padding: 0 .1rem;
    width: 33%;
    display: inline-block;
    text-align: center;
}
.section img{
    width: 1.6rem;
    height: 1.6rem;
}
img{
width: 100%;
height: 100%;
text-align:center;
}
	/*div{font-size: 500px;}*/
</style>