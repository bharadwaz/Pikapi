var express = require('express');
var router = express.Router();
var db = require('../config/dbconfig');
var qs = require('../services/queryService');
var fs = require('../services/formatService');


router.get("/:generation",(req, res)=>{
    res.send(nreq.params);
})

module.exports = router;