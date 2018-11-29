<template>
  <div class="about">
    <Header headerName="CheckList"
            haveLeftIcon=true
            haveRightIcon=false
            :leftIcon="leftIcon"
            @clickLeftIcon="clickLeftIcon" />
    <CheckList title="普通多选框列表"
               v-model="value"
               @getData="getinfo"
               :options="options" />
    <p>您选中的是：{{value}}</p>
    <CheckList title="有禁用选项的多选框列表"
               v-model="value1"
               @getData="getTtInfo"
               :options="options1" />
    <p>您选中的是：{{value1}}</p>
    <CheckList title="有选中禁用的多选框列表"
               v-model="value2"
               @getData="getinfov"
               :options="options2" />
    <p>您选中的是：{{value2}}</p>
  </div>

</template>
<script>
import Header from '@/components/header.vue'
import CheckList from '@/components/checkList.vue'
export default {
  components: {
    Header,
    CheckList
  },
  data () {
    return {
      value: '',
      value1: "",
      value2: "",
      options: ['optionA', 'optionB', 'optionC'],
      options1: [
        {
          label: 'disabled option',
          value: 'valueF',
          disabled: true
        },
        {
          label: 'optionE',
          value: 'valueE',
          disabled: false,
          checked: false
        },
        {
          label: 'optionA',
          value: 'valueA'
        },
        {
          label: 'optionB',
          value: 'valueB'
        }
      ],
      options2: [
        {
          label: 'checked disabled',
          value: 'valueE',
          disabled: true,
          checked: true
        },
        {
          label: 'optionA',
          value: 'valueA'
        },
        {
          label: 'optionB',
          value: 'valueB'
        }
      ]
    }
  },
  methods: {
    clickLeftIcon () {
      this.$router.back(-1)
    },
    getTtInfo (arr) {
      this.value1 = arr;
    },
    getinfo (arr) {
      this.value = arr;
    },
    getinfov (arr) {
      this.value2 = arr;
    }
  }
}
</script>


<style scoped>
.about {
  min-height: 100vh;
  background: #fff;
  box-sizing: border-box;
}
.about p {
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  font-size: 0.28rem;
  margin-bottom: 0.8rem;
}
</style>

