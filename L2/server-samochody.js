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

const auta = [
  "",
  "audi",
  "bmw",
  "mercedes",
  "ferrari",
  "lamborghini",
  "porsche",
];

const rodzaje = ["nowe", "używane", "powypadkowe"];

app.get("/", function (req, res) {
  let result = "<table>";
  result += '<form action="/" method="POST">';
  for (auto of auta) {
    result += `<tr><td>${auto}</td>`;
    for (rodzaj of rodzaje) {
      if (auto !== "") {
        const input = `<td><input type="radio" name="${auto}" value="${rodzaj}" /></td>`;
        result += input;
      } else {
        result += `<td>${rodzaj}</td>`;
      }
    }
    result += "</tr>";
  }
  result += '</table><br><input type="submit" value="submit"/></form>';

  res.send(result);
});

app.post("/", function (req, res) {
  const counts = {
    nowe: 0,
    używane: 0,
    powypadkowe: 0,
  };

  for (const auto of auta) {
    if (req.body[auto]) {
      counts[req.body[auto]]++;
    }
  }

  let result = "<h2>Results</h2><ul>";
  for (const rodzaj in counts) {
    result += `<li>${rodzaj}: ${counts[rodzaj]}</li>`;
  }
  result += "</ul><a href='/'>Back to form</a>";

  res.send(result);
});
