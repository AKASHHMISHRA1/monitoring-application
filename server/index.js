var server=require('ws').Server;
var s=new server({port: 5001});

s.on('connection',function(ws){
  ws.on('message',function(message1){
      console.log("Received: "+message1);
      
      s.clients.forEach(function e(client){
        if(client != ws)
         client.send(message1);

      });
    });
    
    ws.on('close',function(){
        console.log("I lost a client");
    });

    console.log("one more client connected");

});