var listdata = require('./../models/data/testlist');

exports.setDefaultMenu = function (menuItems, val) {
    if (menuItems && menuItems.length > 0) {
        for (var i = 0; i < menuItems.length; i++) {
            var key =  menuItems[i].title;
            console.log(key + '     ' +val);
            if (val && val === key) {
                menuItems[i].active = true;
            }
            else {
                menuItems[i].active = false;
            }
        }
    }
    return menuItems;
} 
exports.menuList = {
    home: "Home",
    apps: "Apps",
    notes:"Notes",
    tests:"Tests",
    admin:"Admin",
    about: "About",
    contact: "Contact",
}

var email = require("./../node_modules/emailjs/email");

var e_server = email.server.connect({
    user: "contactus@whitesof.com",
    password: "**",
    host: "server210.webhostingpad.com",
    port: 2626,
    timeout:10000
});

var gmail_server = email.server.connect({
    user:       process.env.WHITESOF_EMAIL_USER,  
    password:   process.env.WHITESOF_EMAIL_PWD,
    host:       process.env.WHITESOF_EMAIL_HOST,
    port:       process.env.WHITESOF_EMAIL_PORT,
    ssl:        process.env.WHITESOF_EMAIL_SSL,
    timeout:    Number(process.env.WHITESOF_EMAIL_TIMEOUT)
});
 
exports.sendEmailHTML = function (data, callback) {
    
    console.log("Environment Variables:"+process.env.WHITESOF_EMAIL_USER);
    //Prepare message template here.
    var message = {};
    if (data) {
        message.text = data.email+'  '+ data.message;
        message.from = data.email;
        message.to =  process.env.WHITESOF_EMAIL_USER,
        message.subject = data.subject;
    }
    console.log(gmail_server);
    gmail_server.send(message, callback);

};






//This code is only to generate test data.

exports.printTestData=function (data, callback){
    
  var TEXT={
      PHYTOPIC:"PHYTOPIC_",
      SAMP:"_SAMP",
      SAMP1:"SAMP_",
      SAMP2:"Sample Test "
  }
    
     //LOGIC For TOPICS LIST
  var temp=[]
  for(var i=0;i<listdata.physics_temp_topics_list.length;i++){
        var topkey= TEXT.PHYTOPIC+(i+1);
        var val=listdata.physics_temp_topics_list[i].toptitle; 
      
      
       //Creating subtopics
      var stopic=[];
      for(var j=0;j<5;j++){
          var tstr=TEXT.SAMP2+(j+1);
          stopic[j]={
              title:tstr,
              details:topkey+TEXT.SAMP+j,
              url:"/"+TEXT.PHYTOPIC+(i+1)+"/"+TEXT.SAMP1+j
          }
      }
      
       //Adding to main 
        temp[i]={ 
                 topkey:topkey,
                 toptitle:val ,
                 active:true,
                 toplist:stopic
           }
        
        
       
  }
  /*
  //LOGIC For SUB TESTS
  var temp={};
  for(var i=0;i<listdata.physics_topics_list.length;i++){ 
      var key=listdata.physics_topics_list[i].topkey; 
      var su=[];
      for(var j=0;j<5;j++){
          
          var tstr="Sample Test "+(j+1);
          su[j]={
              title:tstr,
              details:key+"_SAMP"+j
          }
      }
      temp[key]={active:true,tlist:su};
  } 
  
  */
  return JSON.stringify(temp,null,'\t');
}