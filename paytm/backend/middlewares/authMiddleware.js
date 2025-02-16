import { JWT_SECRET } from "../config";

const jwt = require("jsonwebtoken"); 

export default function authMiddleware() {
    return (req, res, next) => {
        const { bearerToken } = req.headers["Authorization"];
        if(!bearerToken) {
            return res.status(401).json({
                message: "Unauthorized User"
            });
        }

        try {
            const actualToken = bearerToken.split(" ")[1];
            const userExists = jwt.verify(actualToken, JWT_SECRET);
            req.username = userExists;
            next();
        } catch (error) {
            res.status(400).json({
                message: "Token not valid!" 
            });
        }
    }
}