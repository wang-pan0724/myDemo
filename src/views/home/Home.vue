<template>
  <div class="home">
    <Header headerName="基本组件"
            fixed=true />
    <div class="homeList"
         @click="checkPage('headerList')">Header</div>
    <div class="homeList"
         @click="checkPage('swiper')">Swiper</div>
    <div class="homeList"
         @click="checkPage('radio')">Radio</div>
    <div class="homeList"
         @click="checkPage('checkList')">CheckList</div>
    <div class="homeList"
         @click="checkPage('navbar')">Navbar</div>
    <div class="homeList"
         @click="checkPage('progress')">Progress</div>
    <div class="homeList"
         @click="checkPage('range')">Range</div>
    <div class="homeList"
         @click="checkPage('toast')">Toast</div>
    <div class="homeList"
         @click="checkPage('switch')">Switch</div>
    <div class="homeList"
         @click="checkPage('messageBox')">Message Box</div>
    <div class="homeList"
         @click="checkPage('message')">各种输入框</div>
    <div class="homeList"
         @click="checkPage('message')">支付密码</div>
    <div class="homeList"
         @click="checkPage('message')">手势密码</div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
export default {
  name: 'home',
  components: {
    Header,
  },
  created () {
  },
  methods: {
    checkPage (pageUrl) {
      this.$router.push({ name: pageUrl });
    },
  }
}
</script>
<style scoped>
.home {
  min-height: 100vh;
  font-size: 0.3rem;
  padding-bottom: 1rem;
  box-sizing: border-box;
  background: #fff;
}

.homeList {
  height: 0.96rem;
  line-height: 0.96rem;
  background: #d9d9d9;
  color: #2c3e50;
  margin-top: 0.1rem;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
}
</style>

