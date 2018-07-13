var express = require('express');
var router = express.Router();
var db = require('../config/dbconfig');
var qs = require('../services/queryService');
var fs = require('../services/formatService');


router.get("/",(req, res)=>{
    query="select * from "+db.table+" where is_legendary=1";
    qs.getResults(query,(err, results, fields)=>{
        res.send(fs.formatResults(results));
    });
})

module.exports = router;