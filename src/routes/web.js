const express = require("express");
const {
  getHomePage,
  getTuan,
  portCreateUser,
  viewUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.post("/add-user", portCreateUser);
router.get("/viewUser", viewUser);
router.get("/ChaoTuan", getTuan);
module.exports = router;
