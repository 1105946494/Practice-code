function x(fn, time) {
  let x1 = null;
  return function () {
    const content = this;
    if (x1) {
      window.clearTimeout(xx1);
    }
    x1 = setTimeout(() => {
      fn.apply(content, arguments);
      x1 = null;
    }, time);
  };
}
let xxx1 = x(() => {
  console.log("hi");
});
