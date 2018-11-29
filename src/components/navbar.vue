<template>
  <div class="navbar">
    <div v-for="(item,index) in tabItem"
         :key="index"
         :id="index"
         @click="selectThis(index)"
         :class="index==select ? 'isSelected' : ''"
         :style="{'width':(100/tabItem.length + '%'),'font-size':navBarStyle.fontSize,'background-color':navBarStyle.backColor,'color':navBarStyle.color,'height':navBarStyle.height,'line-height':navBarStyle.height}">
      {{item}}
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabItem: "tabItem",
    navBarStyle: "navBarStyle"
  },
  data () {
    return {
      select: 0
    }
  },
  methods: {
    selectThis (id) {
      this.select = id;
      this.$emit('selectItem', id);
    }
  },
  watch: {

  }
}
</script>
<style scoped>
.navbar {
  display: flex;
  font-size: 0.26rem;
}
.navbar div {
  text-align: center;
  position: relative;
}
.isSelected {
  border-bottom: 3px solid #26a2ff;
  color: #26a2ff;
  margin-bottom: -3px;
}
</style>
