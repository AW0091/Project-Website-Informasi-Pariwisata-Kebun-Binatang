const express = require('express');
const News = require('../models/news');
const router = express.Router();

router.get('/news', async (req, res) => {
    
    var newsN = await News.find();
    // check user session
    res.render('pages/news', {
      newsN: newsN
    });
  });
  
  module.exports = router;