const mysql = require("mysql2/promise");
const connection = mysql.createPool({
  host: "localhost",
  port: 3307,
  
  database: "nodejsStudy",
  charset: "utf8",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  waitForConnections: true,
  connectionLimit: 10
});
module.exports = connection;
