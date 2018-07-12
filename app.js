
// Public Domain

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 5555;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const stream = fs.createReadStream('./index.html', {
    encoding: 'utf8'
  });

  stream.pipe(res);

  stream.on('end', () => {
    res.end();
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
