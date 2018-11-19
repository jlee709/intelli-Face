const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const app = express();
// shelfed but will work later on be
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
app.use(cors());

const database = {
  users: [
    {
      id: "1",
      name: "justin",
      password: "hello",
      email: "justin@jlee.com",
      entries: 0,
      joined: new Date()
    },
    {
      id: "2",
      name: "wayne",
      password: "karate",
      email: "wayne@jlee.com",
      entries: 2,
      joined: new Date()
    }
  ]
};

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello World!"));

app.post("/signin", (req, res) => {
  var a = JSON.parse(req.body);
  if (
    a.username === database.users[0].email &&
    a.password === database.secrets.hash
  ) {
    res.send("signed in");
  } else {
    res.json("access denied");
  }
});

app.post("/findface", (req, res) => {
  database.users.forEach(user => {
    if (user.email === req.body.email) {
      user.entries++;
      res.json(user);
    }
  });
  res.json("nope");
});

app.post("/register", (req, res) => {
  database.users.push({
    id: "124",
    name: req.body.name,
    email: req.body.email,
    entries: 0,
    joined: new Date()
  });
  res.json(database.users[database.users.length - 1]);
});

app.get("/profile/:userId", (req, res) => {
  database.users.forEach(user => {
    if (user.id === req.params.userId) {
      return res.json(user);
    }
  });
  // res.json('no user')
});

app.listen(3001, () => console.log("Example app listening on port 3001!"));
