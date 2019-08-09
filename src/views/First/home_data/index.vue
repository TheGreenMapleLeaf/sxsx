<template>
    <div class="home_data">
        <Characteristic :list="list[0]"></Characteristic>
        <Threepictures :list="list[1]"></Threepictures>
        <Slideshow :list="list[13]?list[13].AdvInfo.AdvItems:[]"></Slideshow>
        
        <Slideshow :list="list[3]?list[3].AdvInfo.AdvItems:[]"></Slideshow>
        <Threepictures :list="list[4]"></Threepictures>
        <Slideshow :list="list[5]?list[5].AdvInfo.AdvItems:[]"></Slideshow>
        <Threepictures :list="list[6]"></Threepictures>

        <Slideshow :list="list[7]?list[7].AdvInfo.AdvItems:[]"></Slideshow>
        <Homedatalist :list="list[8]"></Homedatalist>
        <Slideshow :list="list[9]?list[9].AdvInfo.AdvItems:[]"></Slideshow>
        <Homedatalist :list="list[10]"></Homedatalist>
        <Slideshow :list="list[11]?list[11].AdvInfo.AdvItems:[]"></Slideshow>
        <Homedatalist :list="list[12]"></Homedatalist>
        <Slideshow :list="list[13]?list[13].AdvInfo.AdvItems:[]"></Slideshow>
        <Homedatalist :list="list[14]"></Homedatalist>
        <Slideshow :list="list[15]?list[15].AdvInfo.AdvItems:[]"></Slideshow>
        <Homedatalist :list="list[16]"></Homedatalist>

        <Slideshow :list="list[17]?list[17].AdvInfo.AdvItems:[]"></Slideshow>
        <Homedatalist :list="list[18]"></Homedatalist>

        <Slideshow :list="list[19]?list[19].AdvInfo.AdvItems:[]"></Slideshow>
        <Homedatalist :list="list[20]"></Homedatalist>
        <Slideshow :list="list[21]?list[21].AdvInfo.AdvItems:[]"></Slideshow>
        <Threepictures :list="list[22]"></Threepictures>
        <Slideshow :list="list[23]?list[23].AdvInfo.AdvItems:[]"></Slideshow>
        <Homedatalist :list="list[24]"></Homedatalist>
    </div>
</template>

<script>
import Characteristic from "./characteristic"
import Threepictures from "./three_pictures"
import Slideshow from "./slideshow"
import Homedatalist from "./home_data_list"
export default {
    name:"home_data",
    components:{
        Characteristic,
        Threepictures,
        Slideshow,
        Homedatalist
    },
    data() {
        return {
            greenfour:[],//四个绿色的通道（包退包换）
            list:[],//数据一大堆26个
            
        }
    },
    created() {
        this.$axios.get("https://api1.34580.com/sh/Home/DefaultHomeV2Request?sourcetype=9&NowVersion=1").then((res)=>{
            this.list = res.data.Data.FloorInfo.ConfigHomeFloors
            this.greenfour = res.data.Data.HomeTabInfos[0].SellPoints;
        })
    },
    computed: {
        obj(){
            
        }
    },

}
</script>

<style scoped>
.home_data{
    width: 100%;
}

</style>
