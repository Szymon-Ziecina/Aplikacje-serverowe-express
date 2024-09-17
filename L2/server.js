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
  console.log(req.query.color);
  res.send(req.query);
});
