const jwt = require("jsonwebtoken");

const token = jwt.sign({ foo: "bar" }, "shhhhh");

console.log(token);
