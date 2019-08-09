<template>
    <div class="product">
        <!-- 轮播图 -->
        <div class="swiper">
        <productSwiper :banner="banner"></productSwiper>
        </div>
        <!-- info -->
        <div class="info">
        <h3>{{productInfo.productName}}</h3>
        <p>￥{{productInfo.periodMoney}}<span>/份</span></p>
        <del>￥{{productInfo.unitPeriodMoney}}<span>/份</span></del>
        <span class="soldNumber">已售{{productInfo.soldNumber}}</span>
        </div>
        <!-- 促销 -->
        <div class="promotion">
            <div class="top">
                <span style="font-size:0.32rem">促销   </span>
                <span style="color:#ff550f;border-radius: .32rem;border: 1px solid #f05423;padding:0 .08rem;">{{productActivityList.typeName}}</span>
                <span>{{productActivityList.name}}</span>
                <span style="float:right;font-weight:900">···</span>
            </div>
            <div class="bottom">
                <span style="font-size:0.32rem">服务</span>
                <span>{{productInfoServiceList[0].name}}</span>·
                <span>{{productInfoServiceList[1].name}}</span>
                <span style="float:right;font-weight:900">···</span>
            </div>
        </div>
        <productSwiper :banner="banner"></productSwiper>
        
    </div>
</template>

<script>
    import productSwiper from "./productSwiper/index";
    export default {
    components: {
        productSwiper
    },
    data() {
        return {
        productInfo: {},
        banner: [],
        productActivityList:{},
        productInfoServiceList:{},
        template:""
        };
    },
    created() {
        this.$axios.get("/api/sh/productdetail/detail", {
            params: {
            sourcetype: 9,
            ssuId: 117873
            }
        })
        .then(res => {
            // console.log(res.data.Data);
            this.productInfo = res.data.Data.productInfo;
            this.banner = res.data.Data.productInfo.banners;
            this.productInfoServiceList=res.data.Data.productInfoServiceList;
            this.productActivityList=res.data.Data.productActivityList[0];
            // console.log(this.productInfoServiceList);
            this.template=res.data.Data.productInfo.fullDescription;
             console.log(this.template)
        });
       
    },
    }
</script>

<style >
.product{
    height: 100%;
    overflow:auto;
    padding-bottom: 2.5rem;
}
.info{
    padding:.26rem;
    background: #fff;
    margin-bottom:.2rem;
}
.info h3{
    color:#333;
    font-weight: 500;
    font-size: .4rem;
    margin:0 0 .16rem;
    height: .528rem;;
}
.info p{
    color:#ff3e3e;
    margin:.2rem 0 .1rem;
    font-size:.3rem;
    height: .568rem;;
}
.info del{
    font-size: .28rem;
    color:#999999;
}
.info .soldNumber{
    font-size: .28rem;
    color:#999999;
    float:right;
}
.promotion{
    padding:.24rem .32rem;
    background: #fff;
    font-size: .26rem;
}
</style>
