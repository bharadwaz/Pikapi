var dbconnection = require('../config/dbPool');
module.exports = {
    getResults: function (query, callback){
    dbconnection.query(query,(err, results, fields)=>{
        callback(err,results,fields);
    })
}
}