const express = require('express');
const ExpNav = require('../models/expNav');
const router = express.Router();

router.get('/experience_detail/:id', async (req, res) => {
    
    var expnav = await ExpNav.find();
    var num = req.params.id;
    // check user session
    res.render('pages/experience_detail', {
      expnav: expnav,
      num: num
    });
  });
  
  module.exports = router;