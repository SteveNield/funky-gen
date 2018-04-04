var config = {};

config.port = process.env.PORT || 5557;

config.auth = {
  reader: {
    key: process.env.READER_KEY || '123123'
  },
  secret: process.env.SECRET || 'supersecrethushdonttellanyone'
}

module.exports = config;
