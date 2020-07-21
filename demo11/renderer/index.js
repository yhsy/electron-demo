window.onload = () => {
  const btn = document.querySelector("#btn");
  const { app, Notification, shell } = require("electron").remote;

  let msg = null;

  // 设置应用模块ID(消息通知底部显示)
  app.setAppUserModelId("Tembition");

  btn.addEventListener("click", () => {
    let options = {
      title: "您有新的订单",
      body: "您有新的订单,请及时处理！2020-07-21",
      icon: "./imgs/icon-notice-128.png",
      // 是否禁用系统提示音(默认false)
      silent: false,
    };

    // 系统是否支持消息通知
    console.log(Notification.isSupported());

    // 方法1:使用Electron的API,能显示,不能对点击进行监控
    // msg = new Notification(options);
    // msg.show();

    // 方法2:通过H5的window.Notification来实现,能监听点击事件
    msg = new window.Notification(options.title, options);

    msg.onclick = () => {
      console.log("通知被点击了");
      // window.open("https://www.teambition.com");
      shell.openExternal("https://www.teambition.com");
    };

    msg.onclose = () => {
      console.log("通知被关闭了");
      msg = null;
    };
  });
};
