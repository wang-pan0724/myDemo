<template>
  <div class="home">
    <Header headerName="MessageBox"
            haveLeftIcon=true
            haveRightIcon=false
            :leftIcon="leftIcon"
            @clickLeftIcon="clickLeftIcon" />
    <div class="btn"
         @click="popUpalert">点击弹出alert</div>
    <div class="btn"
         @click="popUpConfirm ">点击弹出confirm</div>
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
      iconClass: '@/img/return.png',
    }
  },
  methods: {
    clickLeftIcon () {
      this.$router.back(-1)
    },
    popUpalert () {
      this.$messageBox('alert', {
        title: '提示',
        message: "操作成功"
      })
    },
    popUpConfirm () {
      this.$messageBox('confirm', {
        title: '确认',
        message: "确定执行此操作？",
        confirmBtnText: "嗯 是的"
      }).then(async (e) => {
        console.log(e + "---then")
      }).catch((e) => {
        console.log(e + '---catch')
      })
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
