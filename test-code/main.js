// 节流（一段时间执行一次之后，就不执行第二次）
let a = 1;
function throttle(fn, delay) {
  console.log(`我执行了${a}次`);
  a = a + 1;
  let canUse = true;
  return function () {
    console.log(`内部执行了${a}次`);
    if (canUse) {
      fn.apply(this, arguments);
      canUse = false;
      setTimeout(() => {
        canUse = true;
      }, delay);
    }
  };
}

const throttled = throttle(() => console.log("hi"), 2000);
throttled();
throttled();
