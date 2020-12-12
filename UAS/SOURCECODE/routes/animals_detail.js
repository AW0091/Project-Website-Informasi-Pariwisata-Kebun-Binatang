const express = require('express');
const AniList = require('../models/aniList');
const router = express.Router();

router.get('/animals_detail/:id', async (req, res) => {
    
  var anilist = await AniList.find();
    var num = req.params.id;
    // check user session
    res.render('pages/animals_detail', {
      anilist: anilist,
      num: num
    });
  });
  
  module.exports = router;