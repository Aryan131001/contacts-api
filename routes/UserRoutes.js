const express = require("express")
const router = express.Router();
const {
    registerUser,
    loginUser,
    findUser,
} = require("../controllers/userController");
const accessTokenCheck = require("../middleware/accessTokenCheck");


router.route("/register").post(registerUser);

router.route("/login").get(loginUser);

router.route("/find").get(accessTokenCheck, findUser);

module.exports = router;