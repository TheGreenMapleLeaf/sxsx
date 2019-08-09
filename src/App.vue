<template>
  <div id="app">
    <Loading />
    <router-view/>
  </div>
</template>
<script>
import Loading from 'lib/loading'
export default {
  components:{
    Loading
  }
}
</script>
<style >
  #app{
    height: 100%;
  }
</style>
