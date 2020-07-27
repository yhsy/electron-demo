window.onload = () => {
  const webview = document.querySelector("webview");
  const mask = document.querySelector(".m-mask");

  // 页面开始加载
  webview.addEventListener("did-start-loading", () => {
    // console.log("页面加载中……");
    console.log(`网页链接:${webview.getURL()}`);
  });

  // 页面加载成功
  webview.addEventListener("did-finish-load", () => {
    // console.log("页面加载成功！");
    mask.style.display = "none";
    // webview设置为可见
    webview.style.display = "inline-flex";
    // console.log(`网页链接:${webview.getURL()}`);
  });
};
