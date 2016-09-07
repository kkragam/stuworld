var express = require('express');
var globaldata = require('./../models/data/data'); 
var listdata = require('../models/data/testlist'); 
var utils = require('./../utils/utils');
var testModelImpl=require('./../models/impl/testimpl')
 


var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




/* GET admin page. */
router.get('/tasks', function (req, res, next) {
 var resData = globaldata.commonData;
  utils.setDefaultMenu(resData.menu, utils.menuList.admin);
  resData.sampleQuestion = globaldata.sampleQuestion; 
  resData.labels=globaldata.labels;
  resData.topicList = listdata[ "physics_topics_list"]; 
    testModelImpl.getTestList();
  res.render('admin/tasks', resData);
}); 

 
/* GET admin page. */
router.get('/etasks', function (req, res, next) {
 var resData = globaldata.commonData;
  utils.setDefaultMenu(resData.menu, utils.menuList.admin);
  resData.sampleQuestion = globaldata.sampleQuestion; 
  resData.labels=globaldata.labels;
  res.render('admin/etasks' , resData);
}); 


/* GET admin page. */
router.get('/admin', function (req, res, next) {
 var resData = globaldata.commonData;
  utils.setDefaultMenu(resData.menu, utils.menuList.admin);
  resData.sampleQuestion = globaldata.sampleQuestion; 
  resData.labels=globaldata.labels;
  res.render('admin/admin', resData);
}); 


module.exports = router;
