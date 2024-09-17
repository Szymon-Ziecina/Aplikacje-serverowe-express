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
  res.sendFile(__dirname + "/static/pages/formularz-post.html");
});

app.post("/handleForm", function (req, res) {
  res.send(req.body);
});
