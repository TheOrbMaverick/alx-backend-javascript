import fs from 'fs/promises';

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n').filter(line => line.length > 0); // Remove empty lines

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const studentsByField = {};
    // eslint-disable-next-line no-unused-vars
    const header = lines.shift();

    for (const line of lines) {
    // eslint-disable-next-line no-unused-vars
      const [firstname, lastname, age, field] = line.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    }

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
module.exports = readDatabase;
