const express = require("express");
const bodyParser = require('body-parser');
const session = require('express-session');
const layouts = require('express-ejs-layouts');
const ejsLint = require('ejs-lint');
const mongoose = require('mongoose');
const flash = require("connect-flash");
const passport = require("passport");
const app = express();

//passport config
require("./config/passport")(passport);

mongoose.connect("mongodb://127.0.0.1:27017/project-brisurs",{
    useNewUrlParser: true, useUnifiedTopology: true
}, function(error){
    if(error){
        console.log(error,"MONGOOSE ERROR");
    }else{
        console.log("MONGOOSE CONNECTED");
    }
});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());

app.use(express.static('public'));

app.use(session({
    secret: '???', /*ITS A SECRET*/
    cookie: {}
}))

// use layouts
app.use(layouts);
app.set('layout', 'layouts/main.ejs');

// place all styles block in the layout at the head
app.set("layout extractStyles", true);

// place all scripts block in the layout at the end
app.set("layout extractScripts", true);


app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());

// global var
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

// routes

const index = require('./routes/index');

app.use('/', index);

const users = require('./routes/users');

app.use('/', users);

const home = require('./routes/home');

app.use('/', home);

const accomodation = require('./routes/accomodation');

app.use('/', accomodation);

const brisurs_map = require('./routes/brisurs_map');

app.use('/', brisurs_map);

const reach = require('./routes/reach');

app.use('/', reach);

const entry = require('./routes/entry');

app.use('/', entry);

const restaurant = require('./routes/restaurant');

app.use('/', restaurant);

const experience = require('./routes/experience');

app.use('/', experience);

const animals_list = require('./routes/animals_list');

app.use('/', animals_list);

const merchandise = require('./routes/merchandise');

app.use('/', merchandise);

const animals_detail = require('./routes/animals_detail');

app.use('/', animals_detail);

const experience_detail = require('./routes/experience_detail');

app.use('/', experience_detail);

const news = require('./routes/news');

app.use('/', news);

const news_detail = require('./routes/news_detail');

app.use('/', news_detail);

const search = require('./routes/search');

app.use('/', search);

const disclaimer = require('./routes/disclaimer');

app.use('/', disclaimer);



app.get("*", function(req,res){
    res.send("Page Not Found!");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("BRISURS IS ONLINE");
})