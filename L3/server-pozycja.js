const express = require("express");
const app = express();
const PORT = 3000;

// niedokończone

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("static"));
app.use(express.json());

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/static/pages/pozycje.html");
});

app.post("/", (req, res) => {
  const { x, y } = req.body;
  const data = JSON.stringify({
    x,
    y,
  });
  console.log(data);
  res.header("content-type", "application/json").send(data);
});
