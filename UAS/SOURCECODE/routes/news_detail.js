const express = require('express');
const News = require('../models/news');
const router = express.Router();

router.get('/news_detail/:id', async (req, res) => {
    
    var newsN = await News.find();
    var num = req.params.id;
    // check user session
    res.render('pages/news_detail', {
    newsN: newsN,
      num: num
    });
  });
  
  module.exports = router;