var Express = require('express'),
    cors = require('cors'),
    config = require('./config');

var app = new Express();
app.use(cors());

app.get(['','/:hash','/:hash/:complexity'], function(req,res){
  try{
    res.sendStatus(200);
  } catch(err){
    res
      .status(500)
      .json({
        err: err.toString()
      });
  }
})

app.listen(config.port, function(){
  console.log('listening on '+config.port)
})
