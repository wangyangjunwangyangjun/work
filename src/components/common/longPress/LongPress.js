import Vue from 'vue'
Vue.directive('longPress', {
  bind: function (el, binding, vNode) {
    // el: 指令所绑定的元素，可以用来直接操作DOM。
    // binding: 一个对象，包含指令的很多信息。
    // vnode: Vue编译生成的虚拟节点。
    let pressTimer = null;
    const start = (e) => {
      if (e.type === 'click') {
        return
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler()
        }, 1000)
      }
    };
    const cancel = (e) => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null
      }
    };
    const handler = (e) => {
      binding.value(e)
    };
    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);
    el.addEventListener("click", cancel);
    el.addEventListener("mouseout", cancel);
    el.addEventListener("touchend", cancel);
    el.addEventListener("touchcancel", cancel);
  }
});
