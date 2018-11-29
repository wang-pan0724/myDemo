<template>
  <div class="nav">
    <Header headerName="Navber"
            haveLeftIcon=true
            haveRightIcon=false
            :leftIcon="leftIcon"
            @clickLeftIcon="clickLeftIcon" />
    <Navbar :tabItem="listItem"
            @selectItem='select'
            :navBarStyle="navBarStyle" />
    <div class="tabContainer">
      <div>
        您选中的是：{{selectIndex}}
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Navbar from '@/components/navbar.vue'
export default {
  components: {
    Header,
    Navbar
  },
  data () {
    return {
      listItem: ['项目一', '项目一', '项目一'],
      navBarStyle: {
        color: "#222",
        fontSize: '0.26rem',
        backColor: "#fff",
        height: "0.9rem"
      },
      selectIndex: 0
    }
  },
  methods: {
    clickLeftIcon () {
      this.$router.back(-1)
    },
    select (index) {
      this.selectIndex = index;
    }
  }
}
</script>

<style scoped>
.nav {
  background: #fff;
  min-height: 100vh;
}
.tabContainer {
  font-size: 0.26rem;
  padding: 0.2rem;
  box-sizing: border-box;
  flex: 1;
}
</style>
