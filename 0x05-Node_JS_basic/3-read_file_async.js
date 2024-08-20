#!/usr/bin/node

const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      // Split the data into lines and filter out any empty lines
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

module.exports = countStudents;
