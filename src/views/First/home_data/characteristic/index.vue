<template>
    <div class="characteristic">
        <img v-for="(item,index) in data.PicAdvItems" :key="index" :src="item.BackGroundImg" alt="">
    </div>
</template>
<script>
export default {
    name:"characteristic",
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
    .characteristic{
        width: 100%;
        padding: 0.1rem 0.2rem;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
    }
    .characteristic>img{
        width: 3.48rem;
        height: 4.4rem;
    }
</style>
