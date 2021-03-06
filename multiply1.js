// 使用worker之前需要检测当前环境支持不支持
if (window.Worker) {
  // 创建一个专用worker
  var myWorker = new Worker("dedicated-worker.js");

  // 拿到DOM
  var first = document.querySelector("#number1");
  var second = document.querySelector("#number2");
  var result = document.querySelector(".result1");

  // 发送消息事件
  first.onchange = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log("first消息发送到worker");
  };
  second.onchange = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log("second消息发送到worker");
  };

  // 接收消息事件
  myWorker.onmessage = function (e) {
    result.textContent = e.data;
    console.log("接收消息来自worker：", e.data);
  };
}
