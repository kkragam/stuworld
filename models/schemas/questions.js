var mongoose=require('mongoose');
var Schema= mongoose.Schema;
var questionsSchema=new Schema(
     [
        {
            question: String,
            answerType: String,
            questionNo: Number,
            imgpath:String,
            answers: [
                {
                    text: String,
                    seq:Number
                }
            ],
            correct: String 
        }
     ]
    
);

mongoose.model('questionsModel',questionsSchema);