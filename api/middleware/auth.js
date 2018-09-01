const jwt = require('jsonwebtoken');
const jwtKey = require('../../secret');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, jwtKey);
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth Failed'
        });
    }
};
