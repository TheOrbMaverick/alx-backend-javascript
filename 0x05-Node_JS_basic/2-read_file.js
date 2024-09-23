#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

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
  } catch (err) {
    console.error('Cannot load the database');
    throw err;
  }
}

module.exports = countStudents;
