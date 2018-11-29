<template>
  <div class="radio">
    <label class="title">{{title}}</label>
    <a href="#"
       v-for="(item, index) in options"
       :key="index"
       class="radioLink">
      <div class="radioList">
        <div class="radioArea">
          <label>
            <span>
              <input type="radio"
                     :value="typeof item == 'string' ? item : item.value"
                     class="radioInput"
                     v-model="selectedValue"
                     :disabled="typeof item == 'string' ? false : item.disabled == true ? true :false">
              <span class="radioSelect"
                    :class="typeof item == 'string' ? '' : item.disabled == true ? 'radioSelectDisabled' : '' "></span>
            </span>
            <span class="selectListItem">{{typeof item == 'string' ? item : item.label}}</span>
          </label>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'radio',
  data () {
    return {
      selectedValue: ''
    }
  },
  props: {
    title: 'title',
    options: 'options'
  },
  created () {
    // console.log(typeof (this.options));
    if (typeof (this.options) == 'string') {
      this.options = eval("(" + this.options + ")");
    }
  },
  methods: {
  },
  computed: {
  },
  watch: {
    selectedValue () {
      this.$emit('input', this.selectedValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: #888;
  font-size: 0.26rem;
  height: 0.6rem;
  line-height: 0.6rem;
  display: block;
  padding: 0rem 0.2rem;
}
.radioLink {
  background-color: #fff;
  box-sizing: border-box;
  color: inherit;
  min-height: 40px;
  display: block;
  overflow: hidden;
  position: relative;
  text-decoration: none;
}

.radioList {
  height: 0.96rem;
  line-height: 0.96rem;
  width: 100%;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
}

.radioArea,
.radioArea label {
  height: 0.96rem;
  width: 100%;
  display: block;
}

.radioInput {
  display: none;
}

.radioSelect {
  box-sizing: border-box;
  display: inline-block;
  background-color: #fff;
  border-radius: 100%;
  border: 1px solid #ccc;
  position: relative;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.radioSelectDisabled {
  background-color: #d9d9d9;
  border-color: #ccc;
}

.radioInput:checked + .radioSelect {
  background-color: #26a2ff;
  border-color: #26a2ff;
}

.radioInput:checked + .radioSelect::after {
  background-color: #fff;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.radioSelect::after {
  content: ' ';
  border-radius: 100%;
  top: 5px;
  left: 5px;
  position: absolute;
  width: 8px;
  height: 8px;
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  -webkit-transform: scale(0);
  transform: scale(0);
}

.selectListItem {
  font-size: 0.3rem;
  vertical-align: middle;
  margin-left: 6px;
}
</style>
