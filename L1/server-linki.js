const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", function (req, res) {
  let links = [];
  for (let i = 1; i <= 50; i++) {
    const number = Math.floor(Math.random() * 101);
    links.push(`<a href="products/${number}">Link do id: ${number}</a>`);
  }
  let result = "";
  for (const link of links) {
    result = result + link;
  }
  res.send(
    `<div style="display:flex;flex-wrap:wrap;gap:20px;">${result}</div>`
  );
});

app.get("/products/:id", function (req, res) {
  res.send(`Podstrona z danymi produktu o id: ${req.params.id}`);
});
