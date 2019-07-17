/**
 * 快速书写一个防抖函数
 * @description 只要一直调用, callback 将不会被触发
 * 在一次调用结束后, 只有等待 timeout ms 时间, 才能继续调用 callback
 * immediate 决定触发时机
 * @example 
 * 1. 点击按钮发送请求（保存数据之类的）
 * 2. 搜索时自动联想
 * 3. 自动保存
 * 4. Debouncing a resize/scroll event handler
 */
function debounce(callback, timeout, immediate) {
  let timer;
  return function () {
    const context = this; // 持有执行上下文
    const args = arguments; // 记录传参
    const later = function () {
      timer = null; // 贤者时间过了，重振旗鼓，重置为初始状态
      if (!immediate) callback.apply(context, args); // 设置为尾部调用才延时触发
    }
    const callNow = immediate && !timer; // 如果确认允许首部调用，且首次调用，那么本次立即触发
    clearTimeout(timer); // 杀掉上次的计时器，重新计时
    timer = setTimeout(later, timeout); // 重启一个计时器，过了贤者时间之后才触发
    callNow && callback.apply(context, args); // 设置为首部调用立即触发
  }
}



/**
 *  快速书写一个节流函数
 * @description 一直调用 callback, 每隔 timeout ms 时间 callback 触发一次
 * 在 timeout ms 时间内的调用将不触发
 * @example
 * 1. Throttling a button click so we can’t spam click 控制疯狂按钮的响应频率
 * 2. Throttling an API call 控制 API 的调用频率
 * 3. Throttling a mousemove/touchmove event handler 控制频繁触发事件的相应频率
 */
// solution1 记录时间比较
function throttle(callback, timeout) {
  let triggerTime; // 记录每次真正触发时间
  return function () {
    const context = this; // 持有执行上下文
    const args = arguments; // 记录传参
    if (triggerTime === undefined // 首次调用
      ||
      Date.now() - triggerTime > timeout) { // 贤者时间已经过去
      triggerTime = Date.now(); // 记录真正触发时间
      callback.apply(context, args); // 可以触发回调
    }
  }
}
// solution2 间隔时间反转标志位
function throttle(callback, timeout) {
  let disable; // 触发回调是否禁用
  return function () {
    const context = this; // 持有执行上下文
    const args = arguments; // 记录传参
    if (!disable) { // 首次调用或者贤者时间过了，禁用解除
      callback.apply(context, args); // 可以触发回调
      disable = true; // 马上禁用
      setTimeout(_ => disable = false, timeout); // 贤者时间过了，禁用解除
    }
  }
}


/**
 * @description 防抖节流
 */

function mergeTwo(callback, timeout, immediate, waitTime) {
  let timer;
  let lastTime = 0;
  let overTime = false
  return () => {
    const args = arguments; // 记录传参
    const later = () => {
      timer = null; // 贤者时间过了，重振旗鼓，重置为初始状态
      if (!immediate && !overTime) callback.apply(this, args); // 设置为尾部调用才延时触发
    }
    if (lastTime === 0) {
      lastTime = Date.now()
    }
    if (lastTime - Date.now() > waitTime * 1000) {
      console.log('yes, over')
      overTime = true
      lastTime = 0
    }
    const callNow = (immediate && !timer) || overTime; // 如果确认允许首部调用，且首次调用，那么本次立即触发
    clearTimeout(timer); // 杀掉上次的计时器，重新计时
    timer = setTimeout(later, timeout); // 重启一个计时器，过了贤者时间之后才触发
    if (callNow) {
      callback.apply(this, args);
      overTime = false
    } // 设置为首部调用立即触发
  }
}
let i = 0;
let overTimeFunc = mergeTwo(
    () => {
      console.log('111');
    },
    5000,
    false,
    1
)
while (i < 1000000) {
  overTimeFunc()
  i++;
}