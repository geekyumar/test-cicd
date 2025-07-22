const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js! This is a added messsage that got updated from CI/CD, and that works again!\n');
});

server.listen(80, () => {
  console.log('Node app running at http://localhost:3000/');
});
