var http = require('http');


http.createServer(function(req,res){
    res.write("Hello World");
    res.end();
}).listen(5000);
console.log("Server up and is listining at 5000");