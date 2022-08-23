const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  socketPort: process.env.SOCKET_PORT,
  endPoint: process.env.MONGO_URI,
  jwtKey: process.env.JWT_SECRET,
};