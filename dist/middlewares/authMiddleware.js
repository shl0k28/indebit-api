const admin = require('firebase-admin');
const authMiddleware = (req, res, next) => {
    const headerToken = req.headers.authorization;
    if (!headerToken) {
        res.json({
            error: "No header token provided."
        });
    }
    if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
        res.send({ message: "Invalid token" }).status(401);
    }
    const token = headerToken.split(" ")[1];
    admin
        .auth()
        .verifyIdToken(token)
        .then(() => next())
        .catch(() => res.send({ message: "Could not authorize" }).status(403));
};
module.exports = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map