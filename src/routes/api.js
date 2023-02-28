const express = require("express");
const connection = require("../config/database");
const UserAPI = require("../models/Kitten");

const routerAPI = express.Router();

routerAPI.get("/", async(req, res) => {
  let dbres = await UserAPI.find({});
  res.status(200).json({
    errorCode: 0,
    data: dbres});
    
});

module.exports = routerAPI;
