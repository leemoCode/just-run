利用移动设备的触摸事件完成长按功能的实现

核心逻辑很简单：
touchStart时注册延时函数，延时触发长按事件

需要注意的点在于防误触：
- 触发了touchMove事件，需要清除注册的延时函数
- 触发了touchEnd事件，需要清除注册的延时函数
- 滑动误触判断：在touchStart时利用el.getBoundingClientRect().y记录y轴偏移距离，在长按/点击事件即将触发时取y轴偏移量并作差，如果差小于一定值再触发事件

最终在指定div上添加toucdhStart、touchMove、touchEnd事件监听

全局通过:
const app = createApp(this.App);
app.directive('longTouch', useLongTouch); 注入指令

vue文件内通过v-longtouch使用