const express = require("express");
const router = express.Router();
const log = require("./services/log_service/logger");
const AuthController = require("./controllers/registration.controller");

router.get("/v1", (req, res) => {
    log("Server starting", {data: "maww"}, "mauu1212");
    res.json({ message: "Auth API V1" });
});

router.post("/v1/register", async (req, res) => {
    try {
        let params = {
            email: req.body.Email || req.body.email,
            password: req.body.Password || req.body.password
        };

        if (!params.email || !params.password) {
            return res.status(400).json({ error: "Email and Password are required" });
        }
        log("/v1/register", { params }, "register");
        let registerData = await AuthController.register(params);
        res.json({ message: `Hi ${params.email}`, data: registerData });
    } catch (e) {
        log("/v1/register_error", { error: e.message }, "register_error");
        res.status(500).json({ error: "Registration failed", details: e.message });
    }
});

module.exports = router;
