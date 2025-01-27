const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization.split(" ")[1];
    const username = jwt.verify(token, "secret_password_hehe");
    console.log(username);
    req.headers.username = username;
    next();
}

module.exports = userMiddleware;