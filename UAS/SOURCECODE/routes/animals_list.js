const express = require('express');
const AniList = require('../models/aniList');
const router = express.Router();

router.get('/animals_list', async (req, res) => {
    
    var anilist = await AniList.find();
    // check user session
    res.render('pages/animals_list', {
      anilist: anilist
    });
  });
  
  module.exports = router;