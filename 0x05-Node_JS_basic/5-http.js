#!/usr/bin/node

const fs = require('fs');
const http = require('http');

const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
const PORT = 1245;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
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

      // Log the total number of students
      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students and list of first names for each field
      for (const [field, names] of Object.entries(students)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
    })
    .catch((err) => {
      console.error('Cannot load the database');
      throw err;
    });
}

const ROUTE_HANDLER = [
  {
    route: '/',
    handler(_, res) {
      const text = 'Hello Holberton School!';

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', text.length);
      res.statusCode = 200;
      res.write(Buffer.from(text));
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
          res.setHeader('Content-Length', textResponse.length);
          res.statusCode = 200;
          res.write(Buffer.from(textResponse));
        })
        .catch((err) => {
          responseArray.push(err instanceof Error ? err.message : err.toString());
          const textResponse = responseArray.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', textResponse.length);
          res.statusCode = 200;
          res.write(Buffer.from(textResponse));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandle of ROUTE_HANDLER) {
    if (routeHandle.route === req.url) {
      routeHandle.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
