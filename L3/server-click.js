<<<<<<< HEAD
const express = require("express");
const app = express();
const PORT = 3000;

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
  res.sendFile(__dirname + "/static/pages/formularz-click.html");
});

app.post("/", function (req, res) {
  const { liczba1, liczba2, działanie } = req.body;
  const działania = ["suma", "różnica", "iloczyn", "iloraz"];

  const numer1 = parseInt(liczba1);
  const numer2 = parseInt(liczba2);

  let data;

  if (działanie === "wszystkie") {
    data = [];
    for (działa of działania) {
      data.push({
        msg: `${działanie} dwóch liczb`,
        wynik: wyliczWynik(działa, numer1, numer2),
      });
    }
  } else {
    data = {
      msg: `${działanie} dwóch liczb`,
      wynik: wyliczWynik(działanie, numer1, numer2),
    };
  }

  const finalData = JSON.stringify(data, null, 5);

  res.header("content-type", "application/json").send(finalData);
});

function wyliczWynik(działanie, liczba1, liczba2) {
  switch (działanie) {
    case "suma":
      return liczba1 + liczba2;
    case "różnica":
      return liczba1 - liczba2;
    case "iloczyn":
      return liczba1 * liczba2;
    case "iloraz":
      return liczba1 / liczba2;
  }
}
=======
const express = require("express");
const app = express();
const PORT = 3000;

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
  res.sendFile(__dirname + "/static/pages/formularz-click.html");
});

app.post("/", function (req, res) {
  const { liczba1, liczba2, działanie } = req.body;
  const działania = ["suma", "różnica", "iloczyn", "iloraz"];

  const numer1 = parseInt(liczba1);
  const numer2 = parseInt(liczba2);

  let data;

  if (działanie === "wszystkie") {
    data = [];
    for (działa of działania) {
      data.push({
        msg: `${działanie} dwóch liczb`,
        wynik: wyliczWynik(działa, numer1, numer2),
      });
    }
  } else {
    data = {
      msg: `${działanie} dwóch liczb`,
      wynik: wyliczWynik(działanie, numer1, numer2),
    };
  }

  const finalData = JSON.stringify(data, null, 5);

  res.header("content-type", "application/json").send(finalData);
});

function wyliczWynik(działanie, liczba1, liczba2) {
  switch (działanie) {
    case "suma":
      return liczba1 + liczba2;
    case "różnica":
      return liczba1 - liczba2;
    case "iloczyn":
      return liczba1 * liczba2;
    case "iloraz":
      return liczba1 / liczba2;
  }
}
>>>>>>> bd73a1068469049cee83dc3bca42ca522b6a416b
