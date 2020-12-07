onmessage = function (e) {
  console.log("从[index.js]中接收到消息：", e.data[0], e.data[1]);
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log(workerResult);

  // 在worker内部，worker是有效的全局作用域，因此直接调用上面的方法
  postMessage(workerResult);
};
