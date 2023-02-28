const { default: mongoose } = require("mongoose");

const userChema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});
const UserAPI = mongoose.model("TSrv", userChema);
const cat = new UserAPI({
  name: "Trinh Sy Tuan",
  email: "trinh@sytuan.net",
  city: "Thanh Hoá City",
});
cat.save();
module.exports = UserAPI;
