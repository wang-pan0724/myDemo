<template>
  <div class="about">
    <Header headerName="Swipe"
            haveLeftIcon=true
            haveRightIcon=false
            :leftIcon="leftIcon"
            @clickLeftIcon="clickLeftIcon" />
    <p>默认样式</p>
    <swipe class="my-swipe">
      <swipe-item class="slide1">1</swipe-item>
      <swipe-item class="slide2">2</swipe-item>
      <swipe-item class="slide3">3</swipe-item>
    </swipe>

    <p>禁止滑动</p>
    <swipe class="my-swipe"
           disabled='true'
           continuous=false>
      <swipe-item class="slide1">1</swipe-item>
      <swipe-item class="slide2">2</swipe-item>
      <swipe-item class="slide3">3</swipe-item>
    </swipe>
  </div>

  <!-- 如果有不懂的  可以访问一下网址查看 https://github.com/ElemeFE/vue-swipe -->
</template>
<script>
import Header from '@/components/header.vue'
export default {
  components: {
    Header
  },
  methods: {
    clickLeftIcon () {
      this.$router.back(-1)
    },
  }
}
</script>


<style scoped>
.about {
  min-height: 100vh;
  background: #fff;
  box-sizing: border-box;
}
.about p {
  text-align: center;
  font-size: 0.28rem;
}
.my-swipe {
  height: 2rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>

