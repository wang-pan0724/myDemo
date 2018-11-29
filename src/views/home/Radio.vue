<template>
  <div class="about">
    <Header headerName="Radio"
            haveLeftIcon=true
            haveRightIcon=false
            :leftIcon="leftIcon"
            @clickLeftIcon="clickLeftIcon" />
    <Radio title="普通单选框列表"
           v-model="value1"
           :options="options1" />
    <p>您选中的是：{{value1}}</p>
    <!-- <Radio title="有默认选中的单选框列表"
           v-model="value2"
           :options="options1" />
    <p>您选中的是：{{value2}}</p> -->
    <Radio title="有禁用选项的单选框列表"
           v-model="value"
           :options="options" />
    <p>您选中的是：{{value}}</p>
  </div>

</template>
<script>
import Header from '@/components/header.vue'
import Radio from '@/components/radio.vue'
export default {
  components: {
    Header,
    Radio
  },
  data () {
    return {
      value: '',
      value1: '',
      value2: 'optionA',
      options1: ['optionA', 'optionB', 'optionC'],
      options: [
        {
          label: 'disabled option',
          value: 'valueF',
          disabled: true
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
      options: [
        {
          label: 'disabled option',
          value: 'valueF',
          disabled: true
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
  color: #4e4e4e;
  margin-bottom: 0.8rem;
}
</style>

