#!/usr/bin/node

const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Remove the header line
    const header = lines.shift();

    // Initialize counters and lists for each field
    const students = {};
    let totalStudents = 0;

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (!students[field]) {
        students[field] = [];
      }

      students[field].push(firstname);
      totalStudents++;
    });

    // Construct the result string
    let result = `Number of students: ${totalStudents}\n`;

    for (const [field, names] of Object.entries(students)) {
      result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return result.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// Define the root route
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Define the /students route
app.get('/students', (req, res) => {
  const responseArray = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      responseArray.push(report);
      res.status(200).send(responseArray.join('\n'));
    })
    .catch((err) => {
      responseArray.push(err.message);
      res.status(200).send(responseArray.join('\n'));
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = app;

