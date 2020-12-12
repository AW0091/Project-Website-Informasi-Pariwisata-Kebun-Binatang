const express = require('express');
const RestNav = require('../models/restNav');
const router = express.Router();

router.get('/restaurant', async (req, res) => {
    
    var restnav = await RestNav.find();
    // check user session
    res.render('pages/restaurant', {
      restnav: restnav
    });
  });
  
  module.exports = router;