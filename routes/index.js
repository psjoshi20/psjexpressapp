var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use(function timeLog (req,res,next)
{
  console.log('Time: ', Date.now())
  next()
})
module.exports = router;
