var Express = require('express'),
    loggr = require('winter-loggr'),
    simpleauth = require('winter-simple-auth');

module.exports = function(app){
  var route = Express.Router();

  route.get('/',
    simpleauth.Authentication,
    simpleauth.Authorization.for(['Reader']),
    function(req,res){
      loggr.event('generate-request');
      res.json({message: 'generate!'});
    }
  );

  app.use('/generate', route);
}
