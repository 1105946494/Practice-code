function throttle(fn, delay) {
  let canUse = true;
  return function () {
    if (canUse) {
      fn.apply(this, arguments);
      canUse = false;
      setTimeout(() => (canUse = true), delay);
    }
  };
}

const throttled = throttle(() => console.log("hi"));
throttled();
throttled();
