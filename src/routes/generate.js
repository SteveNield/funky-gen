var Express = require('express'),
    loggr = require('winter-loggr'),
    simpleauth = require('winter-simple-auth'),
    FunkyGen = require('./../funky-gen'),
    HashGenerator = require('./../hash-generator'),
    Config = require('./../../config');

module.exports = function(app){
  var route = Express.Router();

  route.get(
    ['/','/:input','/:input/:complexity'],
    simpleauth.Authentication,
    simpleauth.Authorization.for(['Reader']),
    function(req,res){
      loggr.trackRequest(req,res);
      let input = req.params.input;

      if(!input){
        let message = 'no-input-data';
        loggr.err(message)
        return res
          .status(400)
          .json({
            err: message
          });
      }

      try{
        res.json(FunkyGen({
          hash: HashGenerator({ input: input, length: Config.hash.length }),
          complexity: req.params.complexity || 0
        }));
      } catch(err){
        loggr.err(err.toString());
        loggr.warn(err.stack);
        res
          .status(500)
          .json({
            err: err.toString()
          });
      }
    }
  );

  app.use('/generate', route);
}
