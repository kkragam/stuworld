var express = require('express');
var globaldata = require('./../models/data/data'); 
var listdata = require('../models/data/testlist');
var topicsModelHelper=require('../models/helpers/topics'); 
var utils = require('./../utils/utils');
 



var router = express.Router();

/* GET users listing. */
router.get('/*', function(req, res, next) {
  var resData = globaldata.commonData;
  utils.setDefaultMenu(resData.menu, utils.menuList.tests);
 // resData.data = globaldata.appslist;
  var key = "";
  if (req.params[0]) {
    key = req.params[0].toLowerCase();
  }
  resData[key] = globaldata[key];
  //resData.topicList = listdata[key + "_topics_list"];
  if(req.params[0] === 'physics'){
    resData.topicList = listdata[key + "_topics_list"];  
    
    res.render('tests/' + req.params[0], resData);
  }
  else{
    topicsModelHelper.getTestList(key,function(result,err){
      if(err){
        
      }
      resData.topicList=result;
      console.log(result);
      res.render('tests/' + req.params[0], resData);  
    });
    
  }
  
  //res.render('tests/' + req.params[0], resData);
});


  

module.exports = router;
