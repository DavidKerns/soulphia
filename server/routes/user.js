const express = require('express');
const router = express.Router();
const User = require('../models/user');
const ROLES    = require('../models/role-types');


router.post('/register', (req, res, next) => {
  let newUser = new User ({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role
  });
  User.addUser(newUser, (err, user) => {
    if (err){
      res.json({sucess: false, msg:"Failed to register user"});
    } else {
      res.json({sucess: true, msg:"Registered user"});
    }
  });

});



module.exports = router;
