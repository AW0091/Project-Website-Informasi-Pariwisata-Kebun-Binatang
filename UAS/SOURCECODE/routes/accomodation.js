const express = require('express');

const router = express.Router();

router.get('/accomodation', async (req, res) => {
    // check user session
    res.render('pages/accomodation');
  });
  
  module.exports = router;
