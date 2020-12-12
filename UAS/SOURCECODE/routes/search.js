const express = require('express');
const News = require('../models/news');
const router = express.Router();

router.get('/search', async (req, res) => {
    let news
    if (req.query.search) {
        await News.find({ "title": { '$regex': req.query.search, "$options": "i" } }, function (err, allnews) {
            if (err) {
                console.log(err);
            } else {
                news = allnews
            }
        })
    }
    else {
        await News.find({}, function (err, allnews) {
            if (err) {
                console.log(err);
            } else {
                news = allnews
            }
        })
    }
    console.log(news);
    res.render('pages/search', { berita: news })

})
  
  module.exports = router;