const express = require("express");
const router = express.Router();
const log = require("./services/log_service/logger");
const AuthController = require("./controllers/registration.controller");

router.get("/v1", (req, res) => {
    log("Server starting", {data: "maww"}, "mauu1212");
    res.json({ message: "Auth API V1" });
});

router.post("/v1/register", (req, res) => {
    let params = {
        email: req.body.Email,
        password: req.body.Password
    };
    let registerData = AuthController.register(req, params);
    res.json({message: `Hi ${req.body.Email}`, data: registerData});
});

module.exports = router;
