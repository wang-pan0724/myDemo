<template>
  <div class="switch">
    <label>
      <input class="switchInput"
             @change="changeV"
             :checked='switchValue'
             type="checkbox">
      <span class="switchbtn"></span>
    </label>

  </div>
</template>
<script>
export default {
  props: {
    switchValue: "switchValue"
  },
  methods: {
    changeV () {
      this.switchValue = !this.switchValue;
      this.$emit('getData', this.switchValue)
    }
  }
}
</script>
<style scoped>
/* .switch label {
  display: block;
} */
.switchInput {
  display: none;
}
.switchInput:checked + .switchbtn {
  border-color: #26a2ff;
  background-color: #26a2ff;
}
.switchInput:checked + .switchbtn::before {
  -webkit-transform: scale(0);
  transform: scale(0);
}
.switchInput:checked + .switchbtn::after {
  -webkit-transform: translateX(20px);
  transform: translateX(20px);
}
.switchbtn {
  display: inline-block;
  position: relative;
  width: 52px;
  height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  box-sizing: border-box;
  background: #d9d9d9;
}
.switchbtn::before {
  width: 50px;
  height: 30px;
  background-color: #fdfdfd;
}
.switchbtn::after {
  width: 30px;
  height: 30px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.switchbtn::before,
.switchbtn::after {
  content: ' ';
  top: 0;
  left: 0;
  position: absolute;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  border-radius: 15px;
}
</style>


