import './index.css';

/**
 * 打开toast
 * @param message 提示信息
 * @param duration 持续时间,默认1500
 * @param zindex 层叠水平,默认1
 * @param position 位置:top,center,bottom,默认center
 * @param icon 位置:loading,warn,默认loading
 * @param callback 关闭时的回调函数
 */

type iconType = 'loading'|'warn';
type positionType = 'top'|'center'|'bottom';

interface ToastConfig {
  duration?: number;
  position?: positionType;
  icon?: iconType;
  zindex?: number;
}

let toast: any = null;
let timer: any = null;

export const openToast = (msg: string, options?: ToastConfig, cd?: any) => {
  if (toast) {
    return null;
  }

  const message = msg || 'undefined';
  let duration = 1500;
  let position = 'center';
  let zindex = 100;
  let icon = '';
  const callback =
    cd ||
    function noop() {
      return null;
    };

  if (typeof options === 'object') {
    duration = options.duration || 1500;
    position = options.position || 'center';
    zindex = options.zindex || 100;
    icon = options.icon || '';
  }

  toast = document.createElement('div');
  toast.classList.add('toast-container');
  toast.classList.add(position);
  toast.style.zIndex = zindex;
  toast.innerHTML = `\n<div class="toast-wrapper">\n<div class="toast-message ${icon}">\n${message}\n</div>\n</div>\n`;
  toast.addEventListener('webkitTransitionEnd', () => {
    if (toast && !toast.classList.contains('active')) {
      toast.parentNode.removeChild(toast);
      toast = null;
      callback.call(toast);
    }
  });
  document.body.appendChild(toast);
  // 这条语句不是多余,为添加动画作缓冲
  // eslint-disable-next-line no-unused-expressions
  toast.offsetHeight;
  toast.classList.add('active');
  timer = setTimeout(() => {
    if (toast) {
      toast.classList.remove('active');
    }
  }, duration);
};

// 关闭toast
export const closeToast = () => {
   if (toast) {
     toast.parentNode.removeChild(toast);
     toast = null;
     clearTimeout(timer);
   }
 };
