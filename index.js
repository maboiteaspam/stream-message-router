
var streamMsger = require('stream-messenger')
var debug = require('debug')('message-router')

module.exports = function messageRouter (message, name) {
  var fnTransform = function (chunk, enc, cb) {
    if (chunk.message && chunk.message===message) {
      debug('%s is pushing a %s message',
        (name || message + 'Listener'),
        message);
      this.push(chunk)
    }
    cb(null)
  };
  return streamMsger(name || message, fnTransform);
};
