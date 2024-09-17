const express = require("express");
const app = express();
const PORT = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("static"));

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/static/pages/formularz-3b.html");
});

app.post("/", function (req, res) {
  const { count, color, font, size } = req.body;
  if (count && color && font && size) {
    let result = "";
    for (let i = 1; i <= count; i++) {
      result =
        result +
        `<div style="background:${color};font-size:${font}px;width:${size};height:${size}px;border-radius:50%;margin-right:10px;text-align:center">${i}</div>`;
    }
    res.send(result);
  } else {
    res.send("Podaj wszystkie");
  }
});
