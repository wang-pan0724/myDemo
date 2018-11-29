<template>
  <div class="home">
    <Header headerName="Progress"
            haveLeftIcon=true
            haveRightIcon=false
            :leftIcon="leftIcon"
            @clickLeftIcon="clickLeftIcon" />
    <div class="progressList">
      <div class="text">默认样式</div>
      <Progress bar-height="5"
                :value="20"
                bar-color='#26a2ff' />
    </div>

  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Progress from '@/components/progress.vue'
export default {
  components: {
    Header,
    Progress
  },
  data () {
    return {

    }
  },
  methods: {
    clickLeftIcon () {
      this.$router.back(-1)
    }
  }
}
</script>

<style scoped>
.home {
  background: #fff;
  min-height: 100vh;
  font-size: 0.26rem;
}
.progressList {
  display: flex;
  padding: 10px 10px;
  box-sizing: border-box;
}

.text {
  width: 2rem;
  line-height: 26px;
}
</style>
