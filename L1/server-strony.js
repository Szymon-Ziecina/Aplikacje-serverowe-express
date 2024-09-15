const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("static"));

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});

app.get("/koty", function (req, res) {
  res.sendFile(__dirname + "/static/pages/koty.html");
});

app.get("/auta", function (req, res) {
  res.sendFile(__dirname + "/static/pages/auta.html");
});

app.get("/drzewa", function (req, res) {
  res.sendFile(__dirname + "/static/pages/drzewa.html");
});
