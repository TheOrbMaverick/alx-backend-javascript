const http = require('http');

const HOST = 'localhost';
// const app = http.createServer();

const app = http.createServer().on('request', (_, res) => {
  const text = 'Hello Holberton School!';

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', text.length);
  res.statusCode = 200
  res.write(Buffer.from(text));
});

const PORT = 1245;
app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
