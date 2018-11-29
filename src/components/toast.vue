<template>
  <div class="wrap"
       v-if="showWrap"
       :style="{'top':position=='top'?'60px' : position=='bottom' ? '90%' : '50%'}">
    {{text}}
  </div>
</template>
<script>
export default {
  props: {

  },
  created () {

  }

}
</script>
<style scoped>
.wrap {
  position: fixed;
  left: 50%;
  top: 50%;
  background: rgba(0, 0, 0, 0.35);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 0.28rem;
}
</style>


