const express = require('express');
const router = express.Router();

router.get('/disclaimer', async (req, res) => {
    
    res.render('pages/disclaimer', {
    });
  });
  
  module.exports = router;