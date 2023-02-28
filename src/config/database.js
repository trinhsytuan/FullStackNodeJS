const { default: mongoose } = require("mongoose");
const mysql = require("mysql2/promise");
require("dotenv").config;
// const connection = mysql.createPool({
//   host: "localhost",
//   port: 3307,

//   database: "nodejsStudy",
//   charset: "utf8",
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   waitForConnections: true,
//   connectionLimit: 10
// });

const connection = async () => {
  try {
    const options = {
      dbName: "tst"
    }
    await mongoose.connect(process.env.DB_HOST,options);
    console.log(mongoose.connection.readyState);
  } catch (error) {
    console.log("ERRROR:>>>>", error);
  }
};
module.exports = connection;
