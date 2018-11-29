<template>
  <div class="home">
    <Header headerName="导航菜单"
            fixed=true />
    <div class="homeList"
         @click="checkPage('headerList')">ArcMenu</div>
    <div class="homeList"
         @click="checkPage('swiper')">ActionButton</div>
    <div class="homeList"
         @click="checkPage('radio')">BubbleMenu</div>
    <div class="homeList"
         @click="checkPage('checkList')">TabBarMenu</div>
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

