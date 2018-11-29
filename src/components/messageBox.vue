<template>
  <div class="box"
       v-show="showMessage">
    <div class="wrap">
      <div class="title">{{title}}</div>
      <div class="contant">{{message}}</div>
      <div class="btngroup">
        <div class="btn leftbtn"
             v-if="messageType!='alert'"
             @click="cancle">{{cancelBtnText}}</div>
        <div class="btn rightbtn"
             @click="sure">{{confirmBtnText}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showMessage: true,
      resolve: '',
      reject: '',
      promise: '' // 保存promise对象
    }
  },
  props: {
    // title: {
    //   type: String,
    //   default: '标题'
    // },
    // message: {
    //   type: String,
    //   default: '操作成功'
    // },
    // cancelBtnText: {
    //   type: String,
    //   default: '取消'
    // },
    // confirmBtnText: {
    //   type: String,
    //   default: '确定'
    // }
  },
  created () {

  },
  methods: {
    cancle () {
      this.showMessage = false;
      this.reject('cancel');
    },
    sure () {
      this.showMessage = false;
      this.resolve('submit');
    },
    showMsgBox: function () {
      this.isShowMessageBox = true;
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      // 返回promise对象
      return this.promise;
    },
  }

}
</script>
<style scoped>
.box {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100000;
  background-color: rgba(0, 0, 0, 0.4);
}
.wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  background-color: #fff;
  width: 85%;
  border-radius: 3px;
  font-size: 16px;
  -webkit-user-select: none;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.title {
  padding-top: 15px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #333;
}

.contant {
  padding: 10px 20px 15px;
  border-bottom: 1px solid #ddd;
  min-height: 36px;
  position: relative;
  text-align: center;
}

.btngroup {
  display: -webkit-flex;
  display: flex;
  height: 40px;
  line-height: 40px;
}

.btn {
  line-height: 35px;
  display: block;
  background-color: #fff;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 0;
  border: 0;
  text-align: center;
}

.leftbtn {
  width: 50%;
  border-right: 1px solid #ddd;
}

.rightbtn {
  color: #26a2ff;
  width: 50%;
}
</style>


