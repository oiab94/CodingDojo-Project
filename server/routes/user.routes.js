const { Router } = require("express");
const authController = require("../controllers/user.controller");

const router = Router();

router.post("/api/signup", authController.signup_post);

module.exports = router;