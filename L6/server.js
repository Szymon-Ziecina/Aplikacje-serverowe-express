const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const Datastore = require("nedb");
const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.engine("hbs", hbs({ defaultLayout: "main.hbs" }));
app.set("view engine", "hbs");

app.use(express.static("static"));
app.use(express.json());

const coll1 = new Datastore({
  filename: "kolekcja.db",
  autoload: true,
});

const coll2 = new Datastore({
  filename: "users.db",
  autoload: true,
});

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});

// dodawanie do bazy

app.get("/insert", (req, res) => {
  console.log("Przed for: " + new Date().getMilliseconds());
  for (let i = 0; i < 3; i++) {
    let doc = {
      a: "a" + i,
      b: "b" + i,
    };
    coll1.insert(doc, function (err, newDoc) {
      console.log(
        "id dokumentu: " + newDoc._id,
        "dodano: " + new Date().getMilliseconds()
      );
    });
  }
  console.log("PO FOR: " + new Date().getMilliseconds());
  res.send("niga");
});

// pobieranie jednego dokumentu

app.get("/findOne", (req, res) => {
  coll1.findOne({ _id: "yFjfM7lW6pxBoKew" }, function (err, doc) {
    console.log("obiekt z bazy: " + doc);
    console.log("obiekt w formacie JSON" + JSON.stringify(doc, null, 5));
    res.send(JSON.stringify(doc, null, 5));
  });
});

// pobieranie wielu dokumentów

app.get("/find", (req, res) => {
  coll1.find({}, function (err, docs) {
    console.log(docs);
    console.log(JSON.stringify(docs, null, 5));
    res.send(JSON.stringify(docs, null, 5));
  });
});

// pobieranie elementów z parametrami

app.get("/param", (req, res) => {
  coll1.find({ a: "a2" }, function (err, docs) {
    console.log(docs);
    console.log(JSON.stringify(docs, null, 5));
    res.send(JSON.stringify(docs, null, 5));
  });
});

// pobieranie ilości rekordów w bazie

app.get("/count", (req, res) => {
  coll1.count({}, function (err, count) {
    console.log("dokumentów jest: ", count);
  });
});

// pobranie ilości rekordów z parametrami w bazie

app.get("/countParam", (req, res) => {
  coll1.count({ a: "a1" }, function (err, count) {
    console.log("dokumentów jest: ", count);
  });
});

// usunięcie elementu

// pierwszego spełniającego warunek
app.get("/deleteFirst", (req, res) => {
  coll1.remove({ a: "a2" }, {}, function (err, numRemoved) {
    console.log("usunięto dokumentów: ", numRemoved);
  });
});

// wszystkich spełniających warunki
app.get("/deleteAllParam", (req, res) => {
  coll1.remove({ a: "a1" }, { multi: true }, function (err, numRemoved) {
    console.log("usunięto dokumentów: ", numRemoved);
  });
});

// wszystkich
app.get("/deleteAll", (req, res) => {
  coll1.remove({}, { multi: true }, function (err, numRemoved) {
    console.log("usunięto wszystkie dokumenty: ", numRemoved);
  });
});

// użytkownicy

app.get("/users", (req, res) => {
  coll2
    .find({})
    .sort({ _createdAt: 1 })
    .exec(function (err, users) {
      console.log(users);
      res.render("users.hbs", { users });
    });
});

app.post("/addUser", (req, res) => {
  const { login, password } = req.body;
  const user = { login, password, _createdAt: new Date().getTime() };
  coll2.insert(user, function (err, newUser) {
    console.log(newUser);
  });
});
