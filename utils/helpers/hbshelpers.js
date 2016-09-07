var hbs = require('hbs');
var globaldata = require('./../../models/data/data'); 
hbs.registerHelper('hbs_anstype', function(questype,quesNo, ansNo) {
  //console.log(questype); {{hbs_anstype ../answerType ../questionNo this.seq}} {{this.text}}
  var output='';
   if(questype && questype === 'C'){
       output= '<input type="checkbox" name=ques'+quesNo+' value = ans'+ansNo+' />';
   }else if(questype && questype === 'R'){
       output= '<input type="radio" name=ques'+quesNo+' value = ans'+ansNo+' />';
   }
  return  new hbs.SafeString(output);
});


hbs.registerHelper('LABEL', function(labelkey) {
  return globaldata.labels[labelkey]  ; 
});

hbs.registerHelper('ISCHECKED', function(value, conditionvalue) {
  if(value === conditionvalue){
    return 'checked';
  } 
  else return '';
});

hbs.registerHelper('CHOICETYPE', function(value) {
  if(value === 'C'){
    return 'checkbox';
  } else if(value === 'R'){
    return 'radio';  
  }
  else return '';
});


hbs.registerHelper('ANSCHECK',function(seq,correctAns){
  var check='';
  if(correctAns && correctAns.length > 0 ){
    for (var i in correctAns){
      if(seq === correctAns[i]){
        check='checked';
        break;
      }
    }
  }
  console.log("Check Value "+check);
  return check;
});

