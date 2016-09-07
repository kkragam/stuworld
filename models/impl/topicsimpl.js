var db = require("./../mongoosedb").db;
exports.getTopicsList = function (CModel, callback) {
    var output;
    // get all the users

    if (db.readyState === 1) {
        var promise = CModel.find().lean().exec();
        promise.then(function (result) { 
            console.log(result);
            callback(result);
        }).catch(function(err) { 
              callback({ error: 1, message: err.message });
        });
   } else {
        callback({ error: 1, message: "DB Connection Error" });
    }
}