const express = require("express");
const router = express.Router();
const log = require("./services/log_service/logger");
const AuthController = require("./controllers/auth.controller");
const { requireFields } = require("./validators/validate");

router.get("/v1", (req, res) => {
    res.json({ message: "Auth API V1" });
});

router.post("/v1/register", async (req, res) => {
    try {
        let params = {
            email: req.body.email,
            password: req.body.password
        };
        log("/v1/register", { params }, "register");

        let error = requireFields(params, ["email", "password"]);
        if (error) {
            return res.status(400).json({ error: error.msg });
        }

        let registerData = await AuthController.register(req, params);
        res.json({ message: `Hi ${params.email}`, data: registerData });
    } catch (e) {
        log("/v1/register_error", { error: e.stack }, "register_error");
        res.status(500).json({ error: "Registration failed", details: e.stack });
    }
});

module.exports = router;
