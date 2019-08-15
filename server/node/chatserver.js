var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
    
io.on('connection', function(socket){
  console.log('a user connected ' + socket.id);
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chatroom', function(msg){
    console.log(msg);
    io.emit('chatroom', msg);  
  });
});

http.listen(3002, function(){
  console.log('listening on *:3002');
});