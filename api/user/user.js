const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../../User');
const jwtKey = require('../../secret');
const checkAuth = require('../middleware/auth');
const router = express.Router();

router.post('/login', (req, res) => {
    const token = jwt.sign({ user: User }, jwtKey, { expiresIn: '30s' });
    res.status(201).json({
        message: 'Login success',
        token
    });
});

router.post('/data', checkAuth, (req, res) => {
    console.log(req.userToken);
    res.status(201).json({
        message: 'Dashboard'
    });
});

router.get('/data', checkAuth, (req, res) => {
    res.status(201).json({
        message: 'Dashboard'
    });
});

module.exports = router;
