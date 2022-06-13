const jwt = require("jsonwebtoken");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const calculateToken = (userEmail = "", userId = "") => {
  return jwt.sign({ email: userEmail, user_id: userId }, PRIVATE_KEY);
};

const decodeToken = (token) => {
  return jwt.decode(token);
};

// now some tests:

calculateToken("firstEmail@gmail.com");
// returns 731f04b6e83c8e911e0520a1994afaae

calculateToken("otherEmail@gmail.com");
// returns add347e092ce4da01f669b41b0b5354b

calculateToken("firstEmail@gmail.com");
// returns 731f04b6e83c8e911e0520a1994afaae (just as the first string)

module.exports = { calculateToken, decodeToken };
