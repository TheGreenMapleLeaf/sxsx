<template>
    <div class="search">
            <div class="search_box">
                <div class="input_box">
                    <input type="text" :value="keyword" />
                </div>
                <div class="search_button">
                    <button>搜索</button>
                </div>
            </div>

            <div class="hot_search">
                <p>热门搜索</p>
                <div class="hot_search_list">
                    <ul>
                        <li v-for="(item,index) in data" :key="index">
                            {{item.HotWordName}}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="recent_search">
                <p class="recent">最近搜索</p>
                <ul>
                    <li></li>

                </ul>
                <div class="clear_history">
                    清空搜索历史
                </div>
            </div>  
    </div>
</template>

<script>
export default {
  name: "search",
 
  data() {
        return {
            data:[],
            keyword:""
        }
    },
    created() {
        this.$axios.get("/api/sh/productSearch/defaultKeyword?sourcetype=9").then((res)=>{
            this.keyword=res.data.Data.keyword;
        });
        this.$axios.get("/api/sh/Products/ProductHotWordRequest?sourcetype=9").then((res)=>{
            this.data=res.data.Data
        })
    },
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 100%;
}
    .search_box{
        width: 100%;
        height: 1.12rem;
        background: #ffffff;
        padding: 0.24rem 0.16rem;
        margin-bottom: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .input_box input{
        width: 5.82rem;
        height: 0.64rem;
        background: #f0f0f0;
        padding: 0.02rem 0.02rem 0.02rem 0.16rem;
        border-radius: 0.1rem;
        outline: none;
        border: none;
        font: 0.28rem/2rem "";
        
    }
    .search_button button{
        width: 1.2rem;
        height: 0.64rem;
        background: #4cd964;
        color: #fff;
        border-radius: 0.1rem;
        font-size: 0.28rem;
        padding: 0.08rem 0.32rem;
        white-space: nowrap;
        border: none;
        cursor: pointer;
        user-select: none
    }
    .hot_search{
    width: 100%;
    color: #333;
    font-size: 0.28rem;
    padding-top:0.2rem;
    }
    .hot_search>p,.recent{
        font:0.32rem/0.88rem "";
        margin-left: 3%;
    }
    .hot_search_list{
        width: 100%;

    }
    .hot_search_list ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;

    }
    .hot_search_list ul li{
        flex-basis: 30%;
        background: #fff;
        line-height: 0.88rem;
        margin: 1.5%;
        text-align: center;
    }
    .recent_search{
        width: 100%;
    }
    .recent_search .clear_history{
        width: 100%;
        padding: 0.16rem 0.32rem;
        font: 0.28rem/0.48rem "";
        text-align: center;
        background: #fff;
        box-sizing: inherit;
    }
</style>
