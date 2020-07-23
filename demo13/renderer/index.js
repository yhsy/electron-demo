window.onload = () => {
  const { clipboard, nativeImage, Tray } = require("electron").remote;

  const btnCopy = document.querySelector("#btnCopy");

  const pangLink = document.querySelector("#pangLink");

  const btnImg = document.querySelector("#btnImg");
  const xjj = document.querySelector("#xjj");

  const btnCode = document.querySelector("#btnCode");
  const codeDemo = document.querySelector("#codeDemo");

  // 复制文本
  btnCopy.addEventListener("click", () => {
    const link = pangLink.innerHTML;
    clipboard.writeText(link, "selection");
    if (clipboard.readText("selection")) {
      console.log(clipboard.readText("selection"));
      alert("链接复制成功！！");
    } else {
      alert("链接复制失败,请重试");
    }
  });

  // 复制图片
  btnImg.addEventListener("click", () => {
    // 获取图片地址
    const imgSrc = xjj.getAttribute("src");
    console.log(imgSrc);
    // 创建图片对象
    const xjjImg = nativeImage.createFromPath(imgSrc);
    console.log(xjjImg);
    // 获取图片的宽高
    const { width, height } = xjjImg.getSize();
    console.log(width, height);
    // 判断图片是否为空
    if (xjjImg.isEmpty()) {
      alert("图片复制失败");
      return;
    }
    // 把图片对象复制到剪贴板
    clipboard.writeImage(xjjImg);
    alert("图片复制成功,请到微信里直接粘贴");
  });

  btnCode.addEventListener("click", () => {
    const codeHtml = codeDemo.innerHTML;
    // console.log(codeHtml);
    clipboard.writeHTML(codeHtml);
    if (clipboard.readHTML()) {
      console.log(clipboard.readHTML());
      alert("代码复制成功！！");
    } else {
      alert("代码复制失败,请重试");
    }
  });
};
