var express = require('express')
var app = express()
var http = require('http').Server(app)
var IntrinioRealtime = require('intrinio-realtime')

app.use("../public/style.css", express.static(__dirname + '../public/style.css'));
// app.use("/bundle.js", express.static(__dirname + '/bundle.js'));

app.get('/', function(req, res){
  res.sendfile('../public/index.html')
});

// io.on('connection', function(socket){
//   console.log('CONNECTED')
// })
//
// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg)
//     console.log('name: ' + msg.sender + ' - message: ' + msg.content)
//   })
// })

var ir = new IntrinioRealtime({
  username: "d64068e08bebe12456c64df5ab5599d0",
  password: "c1d7e9717d853f7bc6ee5d003bab2df5"
})

ir.join("AAPL", "MSFT", "GE")

ir.onQuote(quote => {
  var { ticker, type, price, size, timestamp } = quote
  console.log("QUOTE: ", ticker, type, price, size, timestamp)
})

// start the server
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'production';
http.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
