# stream-message-router

A stream to route messages given their type.

## Install

	npm i maboiteaspam/stream-message-router --save-dev

## Usage

```js
var flower = require('flower')
var messageRouter = require('stream-message-router')

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
```

## Read more

You can see it in action in `npi`

- https://github.com/maboiteaspam/npi
- https://github.com/maboiteaspam/stream-messenger
- https://github.com/maboiteaspam/flower
- https://github.com/maboiteaspam/bubbler
- https://github.com/maboiteaspam/bubbled
- https://github.com/maboiteaspam/event-stream-writer
