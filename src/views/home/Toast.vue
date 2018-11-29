<template>
  <div class="home">
    <Header headerName="Toast"
            haveLeftIcon=true
            haveRightIcon=false
            :leftIcon="leftIcon"
            @clickLeftIcon="clickLeftIcon" />
    <div class="btn"
         @click="popUp">点击弹出</div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
export default {
  components: {
    Header
  },
  data () {
    return {
      message: 'Upload Complete',
      position: 'bottom',
      duration: 5000,
      iconClass: '@/img/return.png'
    }
  },
  methods: {
    clickLeftIcon () {
      this.$router.back(-1)
    },
    popUp () {
      this.$toast('我是弹出消息', 2000)
    }
  }
}
</script>

<style scoped>
.home {
  background: #fff;
  min-height: 100vh;
}
.btn {
  margin: 0.2rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  background: #e8e8e8;
}
</style>
