require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const configViewEngine = require("../src/config/viewEngine");
const path = require("path");
const webRouter = require("./routes/web");
const connection = require("../src/config/database");
const { default: mongoose } = require("mongoose");
const Kitten = require("./models/Kitten");
const routerAPI = require("./routes/api");
configViewEngine(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", webRouter);
app.use("/api", routerAPI);
Kitten();

(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log("TServices running is port" + port);
    });
  } catch (error) {
    console.log(">>>> Error Connect to DB:", error);
  }
})();
