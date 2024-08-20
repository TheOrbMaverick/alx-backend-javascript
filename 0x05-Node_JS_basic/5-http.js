#!/usr/bin/node

const http = require('http');
const countStudents = require('./3-read_file_async.js');
const url = require('url')

const app = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);

    if (parsedUrl.pathname === '/') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Hello Holberton School!\n');
    } else if (parsedUrl.pathname === '/students') {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write('This is the list of our students\n');

        const databasePath = process.argv[2];

        countStudents(databasePath)
        .then(() => {
            response.end();
        })
        .catch((err) => {
            response.end(err.message)
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain');
        response.end('Not Found\n');
    }
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
