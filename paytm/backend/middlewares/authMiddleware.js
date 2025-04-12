const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken"); 

const authMiddleware = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if(!bearerToken) {
        return res.status(401).json({
            message: "Unauthorized User"
        });
    }

    try {
        const actualToken = bearerToken.split(" ")[1];
        const userExists = jwt.verify(actualToken, JWT_SECRET);
        req.userId = userExists.userId;
        console.log(userExists.userId);
        console.log(userExists);
        next();
    } catch (error) {
        res.status(400).json({
            message: "Token not valid!" 
        });
    }
}

module.exports = {
    authMiddleware,
}