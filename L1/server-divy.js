const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", function (req, res) {
  const {count, bg} = req.query
  let divs = [];

  for (let i = 1; i <= count; i++) {
    divs.push(
      `<div style="height:100px;width:100px;background:${bg};">${i}</div>`
    );
  }

  let result = "";

  for (const div of divs) {
    result = result + div;
  }

  res.send(
    `<main style="display:flex;flex-wrap:wrap;gap:20px;">${result}</main>`
  );
});
