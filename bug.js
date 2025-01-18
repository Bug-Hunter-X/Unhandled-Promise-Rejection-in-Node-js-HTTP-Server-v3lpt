const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({message: 'Hello from Node.js!'}));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Unhandled promise rejections.  In this code sample, there is an unhandled promise rejection
//that could lead to unexpected behavior or crashes.

//To fix this, we need to use .catch() to properly handle the promise rejection.
//This is a common error in asynchronous Node.js code.