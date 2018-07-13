var express = require('express');
var app = express();
var classificationController = require('./routes/classification-controller');
var generationController = require('./routes/generation-controller');
var idController = require('./routes/id-controller');
var legendaryController = require('./routes/legendary-controller');
var nameController = require('./routes/name-controller');
var typeController = require('./routes/type-controller');
var db = require('./config/dbPool');


app.get("/",(req, res)=>{
    res.send("Hello");
})

app.use("/api/name",nameController);
app.use("/api/id",idController);
app.use("/api/type",typeController);
app.use("/api/classification",classificationController);
app.use("/api/generation/",generationController);
app.use("/api/legendary",legendaryController);


app.listen(3000,()=>{
    console.log("Server Started");
})

