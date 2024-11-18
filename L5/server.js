const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.engine("hbs", hbs({ defaultLayout: "main.hbs" }));
app.set("view engine", "hbs");

app.listen(PORT, () => {
  console.log("App listening on port 3000!");
});

// zadanie 1

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/login", (req, res) => {
  res.render("login.hbs");
});

// zadanie 2

app.get("/context", (req, res) => {
  const context = {
    subject: "ćwiczenie 2 - podstawowy context",
    content: "to jest lorem ipsum",
    footer: "to jest stopka na mojej stronie",
  };
  res.render("context.hbs", context);
});

// zadanie 3

app.get("/tablica", (req, res) => {
  const context = {
    subject: "ćwiczenie 3 - dane z tablicy obiektów",
    books: [
      { title: "Lalka", author: "B Prus", lang: "PL" },
      { title: "Hamlet", author: "W Szekspir", lang: "ENG" },
      { title: "Pan Wołodyjowski", author: "H Sienkiewicz", lang: "PL" },
      { title: "Homo Deus", author: "Yuval Noah Harari", lang: "CZ" },
    ],
  };
  res.render("tablica.hbs", context);
});

// zadanie 4

app.get("/select", (req, res) => {
  const context = {
    subject: "ćwiczenie 4 - dane z tablicy, select",
    fields: [{ name: "title" }, { name: "author" }, { name: "lang" }],
    books: [
      { title: "Lalka", author: "B Prus", lang: "PL" },
      { title: "Hamlet", author: "W Szekspir", lang: "ENG" },
      { title: "Pan Wołodyjowski", author: "H Sienkiewicz", lang: "PL" },
      { title: "Zamek", author: "F Kafka", lang: "CZ" },
    ],
  };
  res.render("select.hbs", context);
});

app.get("/handleSelect", (req, res) => {
  const field = req.query.select;
  const books = [
    { title: "Lalka", author: "B Prus", lang: "PL" },
    { title: "Hamlet", author: "W Szekspir", lang: "ENG" },
    { title: "Pan Wołodyjowski", author: "H Sienkiewicz", lang: "PL" },
    { title: "Zamek", author: "F Kafka", lang: "CZ" },
  ];
  let context;
  if (field) {
    context = {
      subject: "ćwiczenie 4 - dane z tablicy, select",
      field,
      books: books.map((book) => book[field]),
    };
  } else {
    context = {
      subject: "ćwiczenie 4 - dane z tablicy, select",
      message: "Nie wybrano opcji",
    };
  }
  res.render("select2.hbs", context);
});

// zadanie 5

app.get("/radio", (req, res) => {
  const context = {
    subject: "ćwiczenie 5 - dane z tablicy, radio",
    fields: [{ name: "title" }, { name: "author" }, { name: "lang" }],
    books: [
      { title: "Lalka", author: "B Prus", lang: "PL" },
      { title: "Hamlet", author: "W Szekspir", lang: "ENG" },
      { title: "Pan Wołodyjowski", author: "H Sienkiewicz", lang: "PL" },
      { title: "Zamek", author: "F Kafka", lang: "CZ" },
    ],
  };
  res.render("radio.hbs", context);
});

app.get("/handleRadio", (req, res) => {
  const field = req.query.radio;
  const books = [
    { title: "Lalka", author: "B Prus", lang: "PL" },
    { title: "Hamlet", author: "W Szekspir", lang: "ENG" },
    { title: "Pan Wołodyjowski", author: "H Sienkiewicz", lang: "PL" },
    { title: "Zamek", author: "F Kafka", lang: "CZ" },
  ];
  let context;
  if (field) {
    context = {
      subject: "ćwiczenie 5 - dane z tablicy, radio",
      field,
      books: books.map((book) => book[field]),
    };
  } else {
    context = {
      subject: "ćwiczenie 5 - dane z tablicy, radio",
      message: "Nie wybrano opcji",
    };
  }
  res.render("radio2.hbs", context);
});
