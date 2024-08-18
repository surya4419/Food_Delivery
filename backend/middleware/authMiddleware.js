import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: "Not Authorized, LOGIN again" });
    }

    const token = authHeader.split(' ')[1]; // Extract the token from "Bearer <token>"

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log("JWT Error:", error);
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default authMiddleware;
