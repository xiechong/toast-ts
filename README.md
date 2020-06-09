# toast-ts
a plugin of toast for react by typescript

# install 
npm i toast-ts

# use
```
 import { openToast } from toast-ts;
 openToast('打开toast成功')
```

# option
### msg（必填）
展示内容: 默认为"undefined"
### duration 
展示时间，单位ms:  默认：1500ms
### position
展示位置，可选为"top","center","bottom":  默认："center"  
### icon
带icon的toast，可选为"loading","warn":  默认：""
### zindex
toast在页面的层级:  默认："100"
### cd
toast关闭时的回调方法:  默认：null
    
# methods
### 手动打开toast的方法:
```
openToast('打开toast');
```
### 手动关闭toast的方法:
```
closeToast();
```

 # example
```
import { openToast } from toast-ts;
openToast('打开toast成功', {
    duration: 3000,
},
function() {console.log('end')});

openToast('打开toast成功', {
    duration: 3000,
    icon: "loading"
});

openToast('打开toast成功', {
    position: "bottom",
    icon: "loading",
});

closeToast();
```
