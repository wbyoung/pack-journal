'use strict';

var path = require('path');


// test configuration overrides
module.exports = {
  public: path.resolve(path.join(__dirname, '../../../tmp/public')),
  db: {
    connection: 'mongodb://127.0.0.1:27017/test'
    // TODO: Create a test db, populate w/ fixtures
  }
};
