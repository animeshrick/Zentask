const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const pino = require("pino");
const { rateLimit } = require("express-rate-limit");
const routes = require("./routes");

dotenv.config();

const logger = pino();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cookieParser());
app.use(express.json());

// Basic Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});
app.use(limiter);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "up", timestamp: new Date().toISOString() });
});

// Import routes
app.use("/api", routes);

// To prevent immediate exit in some environments
const keepAlive = setInterval(() => { }, 1000 * 60 * 60);

const server = app.listen(port, () => {
  logger.info(`🚀 Auth service running on port ${port}`);
});

process.on("SIGINT", () => {
  clearInterval(keepAlive);
  server.close(() => {
    process.exit(0);
  });
});
