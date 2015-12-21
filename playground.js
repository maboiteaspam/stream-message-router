
var flower = require('@maboiteaspam/flower')
var messageRouter = require('./index')

var streamA = flower();

var streamB = messageRouter('hello');       // stream-message-route is a stream which push only
var streamC = messageRouter('goodbye');     // the messages{message: type} matching given value.

streamA.pipe(streamB);                      // streamA will pipe many kind of messages,
streamA.pipe(streamC);                      // but streamB and streamC routes only specific
                                            // message types.
streamB.on('data', function (d) {
  console.log('streamB %j', d);
})

streamC.on('data', function (d) {
  console.log('streamC %j', d);
})

streamA.on('data', function (d) {
  console.log('streamA %j', d);
})

streamA.write({                             // write some messages Object {
  message : 'hello',                        //    type: the message type
  body    : 'the world'                     //    body: the message body
});                                         // }
streamA.write({
  message : 'goodbye',                      // another kind of message.
  body    : 'the world'
});

