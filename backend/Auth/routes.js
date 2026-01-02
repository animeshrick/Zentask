const express = require("express");
const router = express.Router();

router.get("/v1", (req, res) => {
    res.json({ message: "Auth API V1" });
});

module.exports = router;
