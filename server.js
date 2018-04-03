if(process.env.APPINSIGHTS_INSTRUMENTATIONKEY){
  require('applicationinsights').start();
}

var express = require('express');

var app = express();

app.set('port', process.env.PORT || 5557);

app.get('/generate', function(req,res){
  res.json({message: 'generate!'});
});

app.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
