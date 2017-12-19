var express = require('express');
var router = express.Router();
const User = require('../models/user');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/profile', (req, res) => {
  res.render('user/:id');

});

router.get("/about",(req, res, next) => {
  res.render('./about/index');
  });



module.exports = router;
