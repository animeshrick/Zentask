const fs = require("fs");
const path = require("path");
const pino = require("pino");

const logDir = path.join(process.cwd(), "logs");

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const loggerRegistry = new Map();

function getFileLogger(fileName) {
  if (loggerRegistry.has(fileName)) {
    return loggerRegistry.get(fileName);
  }

  const filePath = path.join(logDir, `${fileName}.log`);
  const stream = fs.createWriteStream(filePath, { flags: "a" });

  const logger = pino(
    {
      level: "info",
      base: null,
      timestamp: () =>
        `,"current_dt":"${new Date().toISOString()}"`,
    },
    stream
  );

  loggerRegistry.set(fileName, logger);
  return logger;
}

function log(message, data = {}, fileName = "app") {
  const logger = getFileLogger(fileName);

  logger.info({
    message,
    data,
  });
}

module.exports = log; // ✅ THIS IS THE KEY
