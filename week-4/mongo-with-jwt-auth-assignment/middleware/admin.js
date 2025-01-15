const jwt = require("jsonwebtoken");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization.split(" ")[1];
    const username = jwt.verify(token, "secret_password_hehe");
    console.log(username);
    req.headers.username = username;
    next();
}

module.exports = adminMiddleware;