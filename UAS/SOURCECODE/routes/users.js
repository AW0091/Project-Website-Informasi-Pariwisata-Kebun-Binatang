const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const passport = require("passport");

//user model
const User = require("../models/User");

router.get("/login", (req, res) => res.render("pages/login"));

router.get("/register", (req, res) => res.render("pages/register"));

//register post

router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;

  let errors = [];

  //cek required
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "All data need to be fill" });
  }

  //password
  if (password !== password2) {
    errors.push({ msg: "Password not match" });
  }

  if (errors.length > 0) {
    res.render("pages/register", {
      errors,
      name,
      email,
      password,
      password2,
    });
  } else {
    //validasi oke lanjut database
    User.findOne({ email: email }).then((user) => {
  
      if (user) {
      
        errors.push({ msg: "Email is already used" });
        res.render("pages/register", {
          errors,
          name,
          email,
          password,
          password2,
        });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            
            newUser.password = hash;

          
            newUser
              .save()
              .then((user) => {
                req.flash(
                  "success_msg",
                  "Registration complete"
                );

                res.redirect("/login");
              })
              .catch((err) => console.log(err));
          })
        );
      }
    });
  }
});

//login handle
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
});

//logout handle
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});
module.exports = router;
