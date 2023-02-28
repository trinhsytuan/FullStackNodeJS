const connection = require("../config/database");
const { queryAllUser, addUser } = require("./userID");

const getHomePage = async (req, res) => {
  return res.render("home.ejs");
};

const viewUser = async (req, res) => {
  const data = await queryAllUser();
  return res.render("viewUsers.ejs", { data: data });
};
const getTuan = (req, res) => {
  res.send("TNodeServices");
};

const portCreateUser = async (req, res) => {
  let { txtName, lname, city } = req.body;
  const ress = await addUser(txtName, lname, city);
  res.send("Address Succerfully");
};
module.exports = {
  getHomePage,
  getTuan,
  portCreateUser,
  viewUser,
};
