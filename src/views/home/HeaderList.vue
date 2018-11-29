<template>
  <div class="home">
    <Header :headerName="headertype"
            haveLeftIcon=true
            haveRightIcon=false
            fixed=false
            :leftIcon="leftIcon"
            :rightIcon="rightIcon"
            rightText='更多'
            @clickLeftIcon="clickLeftIcon"
            @clickRightIcon="clickRightIcon"
            @clickLeftText="clickLeftText"
            @clickRightText="clickRightText" />
    <Header headerName=""
            haveLeftIcon=true
            haveRightIcon=false
            :leftIcon="leftIcon"
            @clickLeftIcon="clickLeftIcon" />
    <Header headerName="Header"
            haveLeftIcon=true
            haveRightIcon=false
            :leftIcon="leftIcon"
            @clickLeftIcon="clickLeftIcon" />
    <Header headerName="Header"
            haveLeftIcon=false
            haveRightIcon=false
            rightText='more'
            :leftIcon="leftIcon"
            @clickRightText="clickRightText" />
  </div>
</template>

 <script>
import Header from '@/components/header.vue'

export default {
  name: 'headerList',
  data () {
    return {
      leftIcon: './img/return.png',
      rightIcon: './img/return.png',
      headertype: 'Header'
    }
  },
  components: {
    Header
  },
  created () {
  },
  methods: {
    clickLeftIcon () {
      this.$router.back(-1)
    },
    clickRightIcon () {
      alert('clickRightIcon')
    },
    clickLeftText () {
      this.$router.back(-1)
    },
    clickRightText () {
      alert('clickRightText')
    },
  }
}
</script>
<style scoped>
.home {
  min-height: 100vh;
  background: #fff;
}
</style>

