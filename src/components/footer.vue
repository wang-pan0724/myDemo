<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <div @click="swichTab(1)">基本组件</div>
    <div @click="swichTab(2)">选择器</div>
    <div @click="swichTab(3)">图表</div>
    <div @click="swichTab(4)">导航菜单</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 1
    }
  },
  methods: {
    swichTab (tag) {
      if (tag == this.selected) {
        return;
      } else {
        this.selected = tag;
      }

      if (this.selected == 1) {
        this.$router.push({ name: 'home' })
      } else if (this.selected == 2) {
        this.$router.push({ name: 'selector' })
      } else if (this.selected == 3) {
        this.$router.push({ name: 'chart' })
      } else if (this.selected == 4) {
        this.$router.push({ name: 'navigation' })
      }
    }
  },
  mounted () {
    if (this.$route.name == 'home') {
      this.selected = 1;
    } else if (this.$route.name == 'selector') {
      this.selected = 2;
    } else if (this.$route.name == 'chart') {
      this.selected = 3;
    } else if (this.$route.name == 'navigation') {
      this.selected = 4;
    }
  },
}
</script>

<style scoped>
#nav {
  position: fixed;
  bottom: 0px;
  height: 0.8rem;
  font-size: 0.26rem;
  left: 0px;
  width: 100%;
  display: flex;
  color: #4e4e4e;
  background: #fff;
  border-top: 1px solid #d9d9d9;
}
#nav div {
  width: 25%;
  line-height: 0.8rem;
  text-align: center;
}
</style>
