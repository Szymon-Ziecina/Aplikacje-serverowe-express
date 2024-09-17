const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("static"));

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/static/pages/formularz.html");
});

app.get("/handleForm", function (req, res) {
  res.send(
    `<div style="height:100vh;width:100vw;background:${req.query.color};">${req.query.color}</div>`
  );
});
