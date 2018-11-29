<template>
  <div class="bar">

    <div class="darkBar"
         :style="{'height':barHeight}"></div>
    <div class="lightBar"
         :style="{'background':barColor,'height':barHeight,'width':(value+'%')}"></div>
  </div>
</template>
<script>
export default {
  props: {
    barHeight: 'bar-height' + 'px',
    barColor: 'bar-color',
    value: 'value'
  }
}
</script>
<style scoped>
.bar {
  position: relative;
  width: 100%;
  padding: 10px 0px;
  box-sizing: border-box;
}
.darkBar {
  position: absolute;
  left: 0px;
  height: 5px;
  width: 100%;
  background: #ebebeb;
}
.lightBar {
  position: absolute;
  left: 0px;
  height: 5px;
  width: 0px;
  z-index: 1;
  background: #26a2ff;
}
</style>


