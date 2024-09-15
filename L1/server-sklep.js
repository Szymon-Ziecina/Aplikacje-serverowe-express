const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("static"));

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});

app.get("/product/:id", function (req, res) {
  const id = req.params.id;

  if (id <= 3 && id > 0)
    res.sendFile(__dirname + `/static/products/product${id}.html`);
  else
    res.send(`Brak produktu o id: ${id}`);
});
