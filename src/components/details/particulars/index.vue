<template>
    <div class="particulars">
        <div v-html="str"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            str:""
        }
    },
    created() {
        this.$axios.get("/api/sh/productdetail/detail", {
            params: {
            sourcetype: 9,
            ssuId: 117873
            }
        })
        .then(res => {
            this.str=res.data.Data.productInfo.fullDescription;
        })
        }
}
</script>
<style>
.particulars{
    width: 100%;
    height: 100%;
    overflow: auto;
}
.particulars p,.particulars p img{
    width: 100%;
}
</style>
