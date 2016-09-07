var db = require("./../mongoosedb").db;
var topicSchema = require('./../schemas/topics');
var testdata = require('./../data/testlist');

exports.getTestList = function (result, callback) {
    var Topics = topicSchema.PhysicsTopics;

    var topicslist = testdata.physics_topics_list;
    /*
    for (var i in topicslist) {
        var topics = new Topics(topicslist[i]);
        topics.save(function (err) {
            if (err)
                console.log(err);
                console.log(topics);
        });
    }
    */


}