const express = require("express");
const formidable = require("formidable");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log("App listening on port 3000!");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/pages/formularz-upload.html");
});

app.post("/uploadFile", (req, res) => {
  let form = formidable({});

  form.multiples = true;
  form.uploadDir = __dirname + "/static/upload/";
  form.keepExtensions = true;

  form.on("progress", (bytesExpected, bytesReceived) => {
    console.log(
      "progress ",
      bytesExpected,
      bytesReceived,
      new Date().getTime()
    );
  });

  form.on("fileBegin", (name, value) => {
    console.log("fileBegin " + new Date().getTime());
  });

  form.on("end", () => {
    console.log("end " + new Date().getTime());
  });

  form.parse(req, (err, fields, files) => {
    const response = [
      {
        bytesExpected: form.bytesExpected,
        bytesReceived: form.bytesReceived,
      },
      fields,
      files,
    ];
    res.send(response);
  });
});
