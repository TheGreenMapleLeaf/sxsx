<template>
<div class="food" >
  <div class="category-section">
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
	.category-section-title strong svg{width: .6rem;}
  .category-section-title strong {
    font-weight: 400;
    font-size: .4rem;
    color: #999;
    margin-left: 2rem;
    margin-top: -0.2rem;
  }

  .ategory-section{
    margin-bottom: 2rem;
  }
  .category-section-title{
    display: flex;
    margin: 1.3rem 0 1rem 0;
}
  .category-section-title h4{
    font-size: 0.4rem;
    font-weight: normal;
    color: #666;
    padding: 0 .2rem;
  }
  svg:not(:root) {
    overflow: hidden;
}
.category-square{
  display: flex;
  flex-wrap: wrap;
    height: 1.5rem;
    width: 1.5rem;
    margin: -24px 0.4rem;
}
.category-square img{
  display: block;

    /*width: 1.6rem;*/
    height: 1.6rem;

}
.category-square p{font-size: .3rem;}
.category-square-item>.title {
    font-size: .875rem;
    text-align: center;
    color: #333;
    
}

</style>
