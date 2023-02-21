const express = require("express");
const app = express();
const port = 3000;
console.log(process.env.PORT);
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => {
  res.render("sample");
});
app.listen(port, () => {
  console.log("TServices running is port" + port);
});
