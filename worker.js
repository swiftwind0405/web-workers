onmessage = function (e) {
  console.log("从[index.js]中接收到消息：", e.data[0], e.data[1]);
  var workerResult = Number(e.data[0]) + Number(e.data[1]);
  console.log(workerResult);
  if (workerResult > 100) {
    console.warn("worker自己关闭了");
    close();
  } else {
    console.log("发回消息到[main.js]");

    // 在worker内部，worker是有效的全局作用域，因此直接调用上面的方法
    postMessage(workerResult);
  }
};
