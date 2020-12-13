const express = require('express');
const router = express.Router();

router.get('/entry', async (req, res) => {
    
    // check user session
    res.render('pages/entry', {
     
    });
  });
  
  module.exports = router;