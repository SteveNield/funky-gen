if(process.env.APPINSIGHTS_INSTRUMENTATIONKEY){
  require('winter-loggr').setupAppInsights(process.env.APPINSIGHTS_INSTRUMENTATIONKEY);
}

var Express = require('express'),
    bodyParser = require('body-parser'),
    simpleauth = require('winter-simple-auth'),
    config = require('./config');

simpleauth.Setup({
  users: [{
    role: 'Reader',
    accessKey: config.auth.reader.key
  }],
  secret: config.auth.secret
});

var app = Express();
app.use(bodyParser());
app.set('port', config.port);

simpleauth.Route(app);

app.get('/sampleendpoint', function(req,res){
  res.json({message:'Hey there!'});
})

require('./src/routes/generate')(app);

app.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
