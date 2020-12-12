const express = require('express');
const Merch = require('../models/merch');
const router = express.Router();

router.get('/merchandise', async (req, res) => {
    
    var merchan = await Merch.find();
    // check user session
    res.render('pages/merchandise', {
      merchan: merchan
    });
  });
  
  module.exports = router;