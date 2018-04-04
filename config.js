var config = {};

config.port = process.env.PORT || 5557;

config.auth = {
  reader: {
    key: process.env.READER_KEY || '123123'
  },
  secret: process.env.SECRET || 'supersecrethushdonttellanyone'
}

config.hash = {
  length: 16, // must be divisible by numberOfChunks
  numberOfChunks: 4,
  chunkSize: 4
}

config.function = {
  defaultComplexity: 2
}

module.exports = config;
