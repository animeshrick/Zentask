const jwtConfig = {
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
  refreshSecret: process.env.REFRESH_TOKEN_SECRET,
  accessTtl: "15m",
  refreshTtl: "7d",
};

module.exports = { jwtConfig };
