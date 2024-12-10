const express = require("express");
const formidable = require("formidable");
const app = express();
const PORT = 3001;

app.use(express.static(__dirname + "/static/"));
app.use(express.json());

app.listen(PORT, () => {
  console.log("App listening on port 3000!");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/pages/display.html");
});

app.post("/uploadFile", (req, res) => {
  let form = formidable({});

  form.multiples = true;
  form.uploadDir = __dirname + "/static/upload/";
  form.keepExtensions = true;

  console.log(req.body);

  form.parse(req, (err, fields, files) => {
    console.log(files);

    res.send(files);
  });
});
