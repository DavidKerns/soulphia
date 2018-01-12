const express = require('express');
const router = express.Router();
const Application = require('../models/application');


router.post('/chat', (req, res, next) => {
  let newToken = new Token ({
    bigToken: req.body.bigToken

  });
  });
