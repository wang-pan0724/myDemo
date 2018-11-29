<template>
  <div class="header"
       v-bind:style="{'height': headerHeight}">
    <div v-bind:style="{'height': marginTop}"></div>
    <!-- <div v-if="headerType=='normal'"
         class="headertext"
         >{{headerName}}</div> -->
    <div v-bind:style="{'position': fixed=='true' ? 'fixed' : 'relative'}"
         class="headertext headerReturn">
      <div class="left">
        <img src="@/img/return.png"
             v-if="haveLeftIcon == 'true'"
             alt=""
             class="leftIcon"
             @click="clickLeftIcon">
        <span @click="clickLeftText">{{leftText}}</span>
      </div>
      <div class="headerName">{{headerName}}</div>
      <div class="right">
        <span @click="clickRightText">{{rightText}}</span>
        <img src="@/img/return.png"
             v-if="haveRightIcon == 'true'"
             alt=""
             class="rightIcon"
             @click="clickRightIcon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    headerName: 'headerName',
    headerType: 'headerType',
    haveLeftIcon: 'haveLeftIcon',
    haveRightIcon: 'haveRightIcon',
    leftIcon: 'leftIcon',
    rightIcon: 'rightIcon',
    leftText: 'leftText',
    rightText: 'rightText',
    fixed: 'fixed'
  },
  created () {
    this.marginTop = (window.screen.availHeight - window.screen.availWidth * 16 / 9) / 200 + 'rem';
    this.headerHeight = (window.screen.availHeight - window.screen.availWidth * 16 / 9) / 200 + 0.9 + 'rem';
  },
  methods: {
    clickLeftIcon () {
      this.$emit('clickLeftIcon');
    },
    clickRightIcon () {
      this.$emit('clickRightIcon');
    },
    clickLeftText () {
      this.$emit('clickLeftText');
    },
    clickRightText () {
      this.$emit('clickRightText');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  /* position: fixed; */
  left: 0px;
  top: 0px;
  width: 100%;
  line-height: 0.9rem;
  font-size: 0.3rem;
  color: #2c3e50;
  background: #d9d9d9;
}
.headertext {
  height: 0.9rem;
  width: 100%;
  display: flex;
  background: #d9d9d9;
  border-bottom: 1px solid #cccccc;
}

.headerName {
  flex: 1;
  text-align: center;
}

.headerReturn {
  position: relative;
}

.headerReturn .left {
  position: absolute;
  left: 0.1rem;
  height: 0.9rem;
  line-height: 0.9rem;
}

.leftIcon {
  /* top: 0.1rem; */
  width: 0.6rem;
  vertical-align: middle;
  margin-right: 0.1rem;
}

.headerReturn .right {
  position: absolute;
  right: 0.1rem;
  height: 0.9rem;
  line-height: 0.9rem;
}

.rightIcon {
  top: 0.1rem;
  width: 0.6rem;
  vertical-align: middle;
  margin-left: 0.1rem;
}
</style>