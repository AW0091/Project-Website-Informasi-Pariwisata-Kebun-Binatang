const express = require('express');

const router = express.Router();

router.get('/brisurs_map', async (req, res) => {
    // check user session
    res.render('pages/brisurs_map');
  });
  
  module.exports = router;