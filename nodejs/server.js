const http=require('http');
http.createServer((request,response) => {
    response.writeHead(200,{
        'content-type':'text/plain'
    });
response.write('Hello,World!\n');
respose.end();
}).listen(4000);
// node file.js
//browser local host copy on browser