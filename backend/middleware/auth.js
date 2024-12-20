const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); // Remplacez par votre clé secrète
        req.auth = {
            userId: decodedToken.userId
        };
        next();
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
};
