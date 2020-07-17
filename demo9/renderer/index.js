const { dialog } = require("electron").remote;
const fs = require("fs");
window.onload = () => {
  const btnSave = document.querySelector("#btnSave");
  btnSave.addEventListener("click", () => {
    dialog
      .showSaveDialog({
        title: "保存网页",
      })
      .then((result) => {
        console.log(result);
        // console.log(result.filePath);
        fs.writeFileSync(
          result.filePath,
          `
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>demo9-测试的网页文件</title>
            </head>

            <body>
                <h2>我是保存的网页,啦啦啦！！</h2>
            </body>

            </html>
          `
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
