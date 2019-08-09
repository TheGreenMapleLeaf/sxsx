<template>
    <div class="three_pictures">
        <img v-for="(item,index) in data.PicAdvItems" :key="index" :src="item.BackGroundImg" alt="">
    </div>
</template>
<script>
export default {
    name:"Threepictures",
    data(){
        return {
            data:{},
        }
    },
    props:{
        list:{
            type:Object,
            required:false
        }
    },
    watch: {
        list:{
            handler(newVal){
                this.data=newVal
            },
            deep:true,
            // immediate:true
        }
    },
}
</script>
<style scoped>
    .three_pictures{
        width: 100%;
        padding: 0.1rem 0.2rem;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .three_pictures>img{
        width:2.2726rem;
    }
</style>
