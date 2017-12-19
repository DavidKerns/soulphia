const express = require('express');
const router = express.Router();
const User = require('../models/user');
const ROLES    = require('../models/role-types');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');


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

router.get('/show', (req, res, next) => {
  User.find(
    {},
    (err, users) => {
      if (err){ return next(err);}

    return res.json('users/profile');
  });
});

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, (err, users) => {
    if (err){ return next(err);}
  return res.json('users/show', {users: users});

});
});

router.get('/:id/edit', (req, res, next) => {
  User.findById(req.params.id, (err, users) => {
    if (err)       { return next(err) }
    if (!users) { return next(new Error("404")) }
    return res.json('users/edit', { users, types: ROLES});
  });
});
router.post('/:id', (req, res, next) => {
  const updates = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role
  };

User.findByIdAndUpdate(req.params.id, updates, (err, users) => {
    if (err) {
      return res.json('users/edit', {
        errors: users.errors
      });
    }
    return res.redirect(`/users/${users._id}`);
  });
  });


router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;

  User.findByIdAndRemove(id, (err, users) => {
    if (err){ return next(err); }
    return res.redirect('/');
  });
  });



module.exports = router;
