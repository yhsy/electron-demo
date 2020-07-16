const console = require("console");

const { BrowserWindow, dialog } = require("electron").remote;

window.onload = () => {
  // 按钮节点
  const btnSelFile = document.querySelector("#btnSelFile");

  // 图片节点
  const loveImg = document.querySelector("#loveImg");

  btnSelFile.addEventListener("click", () => {
    dialog
      .showOpenDialog({
        // 对话框标题
        title: "请选择喜欢的图片",
        defaultPath: "xiaojiejie.jpg",
        // 确认按钮的自定义标签
        buttonLabel: "确定喜欢",
        // 文件选择过滤器(如图片/音视频/文件等)
        filters: [{ name: "Images", extensions: ["jpg", "png", "gif"] }],
        // 打开文件的属性(可选属性:文件/文件夹/多选/隐藏文件)
        properties: ["openFile"],
      })
      .then((result) => {
        // console.log(result);
        // console.log(result.canceled);
        // console.log(result.filePaths);
        // 选中的图片路径
        const urlPath = result.filePaths[0];
        // 创建Img标签节点(多图,一张张来)
        // const addImg = document.createElement("img");
        // addImg.setAttribute("src", urlPath);
        // document.body.appendChild(addImg);
        // 默认创建了节点
        loveImg.setAttribute("src", urlPath);
        loveImg.removeAttribute("hidden");
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
