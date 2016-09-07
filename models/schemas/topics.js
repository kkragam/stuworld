var mongoose = require('mongoose');

var topicsList = new mongoose.Schema(
    {
        title: String,
        details: String,
        url: String
    }
);
var topicsSchema = new mongoose.Schema(
    {
        topkey: String,
        toptitle: String,
        active: Boolean,
        toplist: [
            topicsList
        ]

    }
);

exports.PhysicsTopics = mongoose.model('PhysicsTopic', topicsSchema);
exports.ChemistryTopic = mongoose.model('ChemistryTopic', topicsSchema);
exports.MathsTopic = mongoose.model('MathsTopic', topicsSchema);
