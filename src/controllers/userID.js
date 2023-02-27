const connection = require("../config/database");

const queryAllUser = async () => {
  const [row, fields] = await connection.execute("SELECT * FROM Users");
  return row;
};
const addUser = async (fname,lname,city) => {
  const [row, fields] = await connection.execute(
    "INSERT INTO Users(fname,lname,city  VALUES (?,?,?)",[fname, lname,city]
  );
  return row;
};
module.exports = { queryAllUser, addUser };
