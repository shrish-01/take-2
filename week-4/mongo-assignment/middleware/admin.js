const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;
    const adminExists = await Admin.findOne({
        username: username,
        password: password
    });

    if(!adminExists) {
        res.status(401).json({
            msg: "Admin not registered",
        });
        return;
    }

    next();
}

module.exports = adminMiddleware;