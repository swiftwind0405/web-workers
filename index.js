// 使用worker之前需要检测当前环境支持不支持
if (window.Worker) {
  // 创建一个专用worker
  var myWorker = new Worker("worker.js");

  // 拿到DOM
  var first = document.getElementById("first");
  var second = document.getElementById("second");
  var result = document.getElementById("result");

  // 发送消息事件
  first.onchange = function () {
    if (Number(first.value) > 100) {
      console.warn("主进程关闭worker");
      myWorker.terminate();
    } else {
        myWorker.postMessage([first.value, second.value]);
        console.log("first消息发送到worker");
    }
  };
  second.onchange = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log("second消息发送到worker");
  };

  // 接收消息事件
  myWorker.onmessage = function (e) {
    console.log("接收消息来自worker：", e.data);
    result.innerHTML = e.data;
  };
}
