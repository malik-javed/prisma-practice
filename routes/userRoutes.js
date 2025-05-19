const express = require("express");
const router = express.Router();

const {
  signup,
  getAllUser,
  updateUser,
} = require("../controllers/userController");

router.route("/signup").post(signup);
router.route("/getall").get(getAllUser);
router.route("/updateUser").post(updateUser);

module.exports = router;
