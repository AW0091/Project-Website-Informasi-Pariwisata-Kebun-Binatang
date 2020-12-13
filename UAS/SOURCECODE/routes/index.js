const express = require("express");
const router = express.Router();
const PR = require('../models/pr');

const { ensureAuthenticated } = require("../config/auth");

router.get("/member", (req, res) => res.render("pages/homepage"));

//dasboard
router.get("/dashboard", ensureAuthenticated, async (req, res) =>{
    var promo = await PR.find();
  res.render("pages/dashboard", {
    name: req.user.name,
    promo: promo
  })
});

module.exports = router;