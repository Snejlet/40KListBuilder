var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var listRouter = require('./routes/list.js');

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use("/", listRouter);

var server = app.listen(3003, function() {
    var port = server.address().port;

    console.log("app listening at :%s", port)
});

//a small change for the purpose of testing pushing to github.
