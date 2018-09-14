const express = require("express");

const app = express();

// app.get("/", (req, res) => {
//   res.send("we are operational");
// });

app.listen(3000, () => {
  console.log("servers up");
});
