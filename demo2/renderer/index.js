var fs = require("fs");

window.onload = function () {
  const btn = document.querySelector(".btn-invite");
  const inviteList = document.querySelector(".invite-list");

  btn.addEventListener("click", function () {
    fs.readFile("xjj.txt", (err, data) => {
      // if (err) throw err;
      console.log(data);
      inviteList.innerHTML = data;
    });
  });
};
