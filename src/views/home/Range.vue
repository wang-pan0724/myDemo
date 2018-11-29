<template>
  <div class="home">
    <Header headerName="Range"
            haveLeftIcon=true
            haveRightIcon=false
            :leftIcon="leftIcon"
            @clickLeftIcon="clickLeftIcon" />
    <Range v-model="rangeValue"
           :min="10"
           :max="90"
           :step="10"
           :bar-height="5" />

  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Range from '@/components/range.vue'
export default {
  components: {
    Header,
    Range
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
}
</style>
