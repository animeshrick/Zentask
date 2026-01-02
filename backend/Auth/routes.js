const express = require("express");
const router = express.Router();
const log = require("./services/log_service/logger");

router.get("/v1", (req, res) => {
    log("Server starting", {data: "maww"}, "mauu1212");

router.get("/v1", (req, res) => {
    log("Server starting", {data: "maww"}, "mauu1212");
    res.json({ message: "Auth API V1" });
});

module.exports = router;
