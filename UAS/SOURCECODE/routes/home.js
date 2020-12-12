const express = require('express');
const HomeNav = require('../models/homeNav');
const router = express.Router();

router.get('/', async (req, res) => {
    
    var homenav = await HomeNav.find();
    // check user session
    res.render('pages/home', {
      homenav: homenav
    });
  });
  
  module.exports = router;

  