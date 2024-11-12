const express = require('express');
const router = express.Router();


function log(req, res, next) {
    console.log(`Request received from ${req.headers['user-agent']}`);
    res.append("Content-Type", "application/json");
    next();
}

router.use(log);

module.exports = router;