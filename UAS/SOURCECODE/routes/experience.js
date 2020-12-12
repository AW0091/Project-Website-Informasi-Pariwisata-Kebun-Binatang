const express = require('express');
const ExpNav = require('../models/expNav');
const router = express.Router();

router.get('/experience', async (req, res) => {
    
    var expnav = await ExpNav.find();
    // check user session
    res.render('pages/experience', {
      expnav: expnav
    });
  });
  
  module.exports = router;