<template>
  <div class="page">
    <div class="cart">
      <div class="sign-in">
        <p>您还没有登录哦~</p>
        <router-link to="/Login" tag="button">请登录</router-link>
      </div>
      <div class="cart-none">
        <img src="../../assets/cart.png" alt />
        <p>您的购物车空空如也</p>
        <router-link tag="button" to="/home/mart">去逛逛</router-link>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {};
</script>

<style>
.page {
  background: #f2f2f2;
  padding: 0 0 2.5rem;
  height: 100%;
}
.cart {
  color: #ccc;
  padding: 2rem 0;
}
.sign-in {
  width: 100%;
  height: 1.2rem;
  background: #cbe5c6;
  color: #49aa34;
  border-bottom: 1px solid #cbe5c6;
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
}
.sign-in p {
  font-size: 0.3rem;
  line-height: 0.6rem;
}
.sign-in button {
  padding: 0 0.4rem;
  border: none;
  border-radius: 0.1rem;
  color: #49aa34;
  border: 1px solid #49aa34;
  background: #ebf5e9;
}

.cart-none {
  width: 100%;
  text-align: center;
}
.cart-none img {
  width: 100%;
}
.cart-none p {
  position: relative;
  top: -1rem;
  width: 3rem;
  text-align: center;
  margin: 0 auto;
  font-size: 0.3rem;
}
.cart-none button {
  height: 1rem;
  border: none;
  background-color: #49aa34;
  padding: 0 1rem;
  border-radius: 5px;
  color: #fff;
  margin-top:-1rem;
  
}
</style>