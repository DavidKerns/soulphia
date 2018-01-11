var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const SUBJECT    = require('../models/class-types');
const Classes = require('../models/classes');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

router.post('/classes', (req, res, next) => {
  let newClass = new Classes ({
    teacher: req.role,
    length: req.body.length,
    subject: req.body.subject
  });
  Classes.addClass(newClass, (err, classes) => {
    if (err){
      res.json({sucess: false, msg:"Failed to make new class"});
    } else {
      res.json({sucess: true, msg:"New class created"});
    }
  });

});
router.get('/show', (req, res, next) => {
  Classes.find({},  (err, classes) => {
      if (err){ return next(err);}

    return res.json('classes/show');
  });
});

router.post ('/classes/:id/add', ensureLoggedIn('/'), (req, res, next) => {
  Classes.findByIdAndUpdate(req.params.id,
    { $push: {student: student._id}},
     (err, classes) => {
    if (err){ return next(err);}

  return res.json(classes);
  });
  // return.status(200).json(student._id);
});

router.get('/:id', (req, res, next) => {
  Classes.findById(req.params.id, (err, classes) => {
    if (err){ return next(err);}

  return res.json('classes/show', {classes: classes});


  });
});



router.post('/class/:id/classes', ensureLoggedIn('/'), (req, res, next) =>{

  ReturnedUser.save((err) =>{
    if(err){
    return next(err);
  }else {
    return res.redirect("/");
  }
});
});


router.get('/:id/edit', (req, res, next) => {
  Classes.findById(req.params.id, (err, classes) => {
    if (err)       { return next(err) }
    if (!classes) { return next(new Error("404")) }
    return res.json('classes/edit');
  });


router.post('/:id', (req, res, next) => {
  const updates = {
    teacher: req.user._id,
    students: req.user._id,
    length: req.body.length,
    subject: req.body.subject
  };

});

Classes.findByIdAndUpdate(req.params.id, updates, (err, classes) => {
    if (err) {
      return res.json('classes/edit', {
        classes,
        errors: classes.errors
      });
    }
    if (!classes) {
      return next(new Error('404'));
    }
    return res.redirect(`/classes/${classes._id}`);

  });
});



router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;

  Classes.findByIdAndRemove(id, (err, classes) => {
    if (err){ return next(err); }
    return res.redirect('/');
  });
  });



module.exports = router;
