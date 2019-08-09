<template>
  <div class="loading" v-if="flag">
    <img src="../../assets/loading.gif" alt style="width: 80%; display: block; margin: 0 auto;"/>
  </div>
</template>
 
<script>
export default {
  name: "LOADING",
  data() {
    return {
        
    };
  }
};
</script>
<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 121;
  width: 100%;
  height: 100%;
  background: #fff;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.loading img {
  width: 1rem;
  height: 1rem;
  margin: 7.5rem auto;
}
</style>