var topicsImpl=require('../impl/topicsimpl');
var topicSchema = require('./../schemas/topics');
exports.getTestList= function(input, result){
    if(input=='Physics'){}
    return topicsImpl.getTopicsList(topicSchema.PhysicsTopics,result); 
}