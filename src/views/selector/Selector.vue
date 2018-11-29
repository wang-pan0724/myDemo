<template>
  <div class="home">
    <Header headerName="选择器"
            fixed=true />
    <div class="homeList"
         @click="checkPage('headerList')">Datetime picker</div>
    <div class="homeList"
         @click="checkPage('swiper')">Date picker</div>
    <div class="homeList"
         @click="checkPage('radio')">Time picker</div>
    <div class="homeList"
         @click="checkPage('checkList')">City picker</div>
    <div class="homeList"
         @click="checkPage('navbar')">自定义模板</div>
    <div class="homeList"
         @click="checkPage('progress')">Default picker</div>
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
  /* padding: 1rem 0rem 0.2rem;
  box-sizing: border-box; */
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

