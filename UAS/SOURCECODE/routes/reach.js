const express = require('express');

const router = express.Router();

router.get('/reach', async (req, res) => {
    // check user session
    res.render('pages/reach');
  });
  
  module.exports = router;
