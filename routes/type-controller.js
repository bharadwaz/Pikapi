var express = require('express');
var router = express.Router();
var db = require('../config/dbconfig');
var qs = require('../services/queryService');
var fs = require('../services/formatService');


router.get("/:type",(req, res)=>{
    query="select * from "+db.table+" where type='"+req.params.type+"'";
    qs.getResults(query,(err, results, fields)=>{
        res.send(fs.formatResults(results));
    });
})

module.exports = router;