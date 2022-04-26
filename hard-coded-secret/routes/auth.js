var express = require('express');
var router = express.Router();

const this_is_a_secret = '437dd558-ab15-4bd9-9f83-c69f8a77e021';

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.password === this_is_a_secret) {
    res.send('Correct Password');
  } else {
    res.send('Incorrect Password');
  }
});

module.exports = router;
