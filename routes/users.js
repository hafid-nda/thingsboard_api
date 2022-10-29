var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(process.env.APPNAME);
});

router.get('/me', (req, res, next) => {
  res.send('coba');
})

module.exports = router;
