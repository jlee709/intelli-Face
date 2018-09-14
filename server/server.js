const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

const database = {
  users: [
    {
      id: "23",
      name: "justin",
      password: "hello",
      email: "justin@jlee.com",
      entries: 0,
      joined: new Date()
    },
    {
      id: "24",
      name: "wayne",
      password: "karate",
      email: "wayne@jlee.com",
      entries: 2,
      joined: new Date()
    }
  ]
};

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/signin", (req, res) => {
  if (
    req.body.password === database.users[0].password &&
    req.body.email === database.users[0].email
  ) {
    res.json("Succsess!!");
  } else {
    res.status(400).json("login error");
  }
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  database.users.push({
    id: "26",
    name: name,
    password: password,
    email: email,
    entries: 0,
    joined: new Date()
  });
  res.json(database.users[database.users.length - 1]);
});

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  let found = false;

  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    res.status(400).json("not found");
  }
});

app.listen(3000, () => {
  console.log("servers up");
});
