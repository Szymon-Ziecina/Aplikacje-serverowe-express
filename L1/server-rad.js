const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", function (req, res) {
  const { value, toRad } = req.query;
  let result;

  if (toRad === "true") result = (value * Math.PI) / 180;
  else result = (value * 180) / Math.PI;

  res.send(
    toRad === "true"
      ? `${value} stopni = ${result} radianów`
      : `${value} radianów = ${result} stopni`
  );
});
