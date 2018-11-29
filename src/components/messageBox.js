import vue from 'vue'

// 这里就是我们刚刚创建的那个静态组件
import MessageBoxComponent from '@/components/messageBox.vue'

// 返回一个 扩展实例构造器
const MessageBoxConstructor = vue.extend(MessageBoxComponent)

function showMessage (messageType, pram) {
  var title = !!pram && !!pram.title ? pram.title : '提示';
  var message = !!pram && !!pram.message ? pram.message : "操作成功！";
  var cancelBtnText = !!pram && !!pram.cancelBtnText ? pram.cancelBtnText : "取消";
  var confirmBtnText = !!pram && !!pram.confirmBtnText ? pram.confirmBtnText : "确定";
  // 实例化一个 toast.vue
  const messageDom = new MessageBoxConstructor({
    el: document.createElement('div'),
    data () {
      return {
        messageType: messageType,
        title: title,
        message: message,
        cancelBtnText: cancelBtnText,
        confirmBtnText: confirmBtnText
      }
    }
  })

  // 把 实例化的 messageBox.vue 添加到 body 里
  document.body.appendChild(messageDom.$el)

  return messageDom.showMsgBox()
    .then(val => {
      document.body.removeChild(messageDom.$el);
      return Promise.resolve(val);
    })
    .catch(err => {
      document.body.removeChild(messageDom.$el);
      return Promise.reject(err);
    });


}


// 注册为全局组件的函数
function registryMessageBox () {
  // vue.prototype.$messageBox = showMessage
  vue.prototype.$messageBox = showMessage
}

export default registryMessageBox
