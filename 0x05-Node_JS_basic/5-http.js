#!/usr/bin/node

const fs = require('fs').promises;
const http = require('http');

const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
const PORT = 1245;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    // Split the data into lines and filter out any empty lines
    const lines = data.trim().split('\n').filter((line) => line !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Remove the header line
    // eslint-disable-next-line no-unused-vars
    const header = lines.shift();

    // Initialize counters and lists for each field
    const students = {};
    let totalStudents = 0;

    lines.forEach((line) => {
      // eslint-disable-next-line no-unused-vars
      const [firstname, lastname, age, field] = line.split(',');

      if (!students[field]) {
        students[field] = [];
      }

      students[field].push(firstname);
      // eslint-disable-next-line no-plusplus
      totalStudents++;
    });

    // Construct the result string
    let result = `Number of students: ${totalStudents}\n`;

    for (const [field, names] of Object.entries(students)) {
      result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return result.trim(); // Return the result string
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const ROUTE_HANDLER = [
  {
    route: '/',
    handler(_, res) {
      const text = 'Hello Holberton School!';

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(text); // Use res.end() to send the response
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseArray = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          responseArray.push(report);
          const textResponse = responseArray.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 200;
          res.end(textResponse); // Properly end the response
        })
        .catch((err) => {
          responseArray.push(err.message);
          const textResponse = responseArray.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.statusCode = 200;
          res.end(textResponse); // Properly end the response
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandle of ROUTE_HANDLER) {
    if (routeHandle.route === req.url) {
      routeHandle.handler(req, res);
      return; // Return after handling the request
    }
  }

  // If no route matched, send a 404
  res.statusCode = 404;
  res.end('Not Found');
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
