const express = require("express");
const app = express();
const PORT = 3000;

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/pages/range.html");
});

app.post("/", (req, res) => {
  const data = JSON.stringify({ serverRange: req.body.userRange });
  res.header("content-type", "application/json").send(data);
});
