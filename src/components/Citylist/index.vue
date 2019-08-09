<template>
    <div class="page">
        <div class="city">
            <div class="title">
                <p>请选择城市，再忙也能买好菜</p>
            </div>
            <div class="item" v-for="(item,index) in list" :key="index">
                <p @click="changeCity(item)">{{item}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[]
        }
    },
    created() {
        this.$axios.get("/api/wx/Basic/CityRouteRequest?sourcetype=9").then((res)=>{
            var data=res.data.Data;
            for(var i=0;i<data.length;i++){
                this.list.push(data[i].CityName)
            }
            // console.log(this.list)
        })
    },
    methods: {
        changeCity(name){
            sessionStorage.setItem("city",name);
            this.$router.go(-1)
        }
    },
}
</script>

<style scoped>
    .page{
        background:#fff url("../../assets/cityList.png") no-repeat;
        background-position:bottom;
        height: 100%;
    }
    .city{
        width: 75%;
        margin: 0 auto;
    }
    .title{
        line-height: 2rem;
        text-align: center;
        font-size: .35rem;
        margin-top: .7rem;
    }
    .item{
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        color: #333;
        margin-bottom: .5rem;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 3px 20px 3px rgba(73,170,52,.15);
        font-size: .3rem;
    }
</style>
