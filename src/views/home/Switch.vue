<template>
  <div class="home">
    <Header headerName="Range"
            haveLeftIcon=true
            haveRightIcon=false
            :leftIcon="leftIcon"
            @clickLeftIcon="clickLeftIcon" />
    <SwitchTab class="switchTab"
               :switchValue="switchValue"
               @getData="getinfov" />
    <p>选项{{switchValue}}</p>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import SwitchTab from '@/components/switch.vue'
export default {
  components: {
    Header,
    SwitchTab
  },
  data () {
    return {
      switchValue: true
    }
  },
  methods: {
    clickLeftIcon () {
      this.$router.back(-1)
    },
    getinfov (b) {
      this.switchValue = b;
    }
  }
}
</script>

<style scoped>
.home {
  background: #fff;
  min-height: 100vh;
}

.switchTab {
  margin: 0.2rem;
}
</style>
