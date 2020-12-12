const express = require('express');
const PR = require('../models/pr');
const router = express.Router();

router.get('/entry', async (req, res) => {
    
    var promo = await PR.find();
    // check user session
    res.render('pages/entry', {
      promo: promo
    });
  });
  
  module.exports = router;