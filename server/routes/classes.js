var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Classes = require('../models/classes');

/* GET Classess listing. */
router.get('/classess', (req, res, next) => {
  Classes.find((err, classessList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(classessList);
  });
});


router.get('/classess/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Classes.findById(req.params.id, (err, theClasses) => {
      if (err) {
        res.json(err);
        return;
      }

      res.json(theClasses);
    });
});

/* EDIT a Classes. */
router.put('/classess/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const updates = {
    teacher: req.body.teacher,
    students: req.body.students,
    length: req.body.length,
  };

  Classes.findByIdAndUpdate(req.params.id, updates, (err) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: 'Class updated successfully'
    });
  });
});

/* DELETE a Classes. */
router.delete('/classess/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Classes.remove({ _id: req.params.id }, (err) => {
    if (err) {
      res.json(err);
      return;
    }

    return res.json({
      message: 'Class has been removed!'
    });
  });
});

router.post('/classes', (req, res, next) => {
  let newClass = new Classes ({
    teacher: req.body.teacher,
    students: req.body.students,
    length: req.body.length
  });
  Classes.addClass(newClass, (err, classes) => {
    if (err){
      res.json({sucess: false, msg:"Failed to make new class"});
    } else {
      res.json({sucess: true, msg:"New class created"});
    }
  });


});

module.exports = router;
