var orm = require("../config/orm.js");

var burger = {
    // Display all burgers in the db.
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
     // Add a new burger to the db.
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    // Change the devoured status to true.
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger