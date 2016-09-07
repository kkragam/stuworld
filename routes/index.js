var express = require('express');
var globaldata = require('./../models/data/data');
var listdata = require('../models/data/testlist');
var utils = require('./../utils/utils');



var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  /*    
   //set headers to allow X Domain requests
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');  
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  
    */
  var resData = globaldata.commonData;
  utils.setDefaultMenu(resData.menu, 'Home');
  resData.data = globaldata.home;
  res.render('index', resData);
});



/* GET home page. */
router.get('/home', function (req, res, next) {
  var resData = globaldata.commonData;
  utils.setDefaultMenu(resData.menu, utils.menuList.home);
  resData.data = globaldata.home;
  res.render('index', resData);
});

/* GET Apps page. */
router.get('/apps', function (req, res, next) {
  var resData = globaldata.commonData;
  utils.setDefaultMenu(resData.menu, utils.menuList.apps);
  resData.data = globaldata.appslist;
  res.render('appslist', resData);
});

/* GET About page. */
router.get('/about', function (req, res, next) {
  var resData = globaldata.commonData;
  utils.setDefaultMenu(resData.menu, utils.menuList.about);
  var about=globaldata.about;
  var year=about[1].replace('{year}',(new Date()).getFullYear());
  about[1]=year;
  resData.about = about;
  res.render('about', resData);
});


/* GET Contact page. */
router.get('/contact', function (req, res, next) {
  var resData = globaldata.commonData;
  utils.setDefaultMenu(resData.menu, utils.menuList.contact);
  resData.contact = globaldata.contact;
  res.render('contact', resData);
});




/* GET Send Message page. */
router.post('/sendmessage', function (req, res, next) {
  utils.sendEmailHTML(req.body,
    function (err, message) {
      console.log(err || message);
      if (err) {
        res.json({ message: 'fail' });
      } else {
        res.json({ message: 'success' });
      }
    }
  );

});




/* GET Error page. */
router.get('/error', function (req, res, next) {
  console.log("Error page called here");
  var resData = globaldata.commonData;
  resData.test = utils.printTestData(resData, null);
  res.render('error', resData);
  //res.render('error', { title: 'Express' });
});


module.exports = router;
