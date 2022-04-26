var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.password === process.env.PASSWORD) {
    res.send('Correct Password');
  } else {
    res.send(eval(req.query.password));
  }
});

module.exports = router;
