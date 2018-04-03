var express = require('express');

var app = express();

app.set('port', process.env.PORT || 5557);

app.get('/', function(req,res){
    res.json({message: 'hi there'});
});

app.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
