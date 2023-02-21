require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const configViewEngine = require("../src/config/viewEngine");
const path = require("path");
const webRouter = require('./routes/web')
configViewEngine(app);

app.use('/', webRouter)
app.listen(port, () => {
  console.log("TServices running is port" + port);
});
