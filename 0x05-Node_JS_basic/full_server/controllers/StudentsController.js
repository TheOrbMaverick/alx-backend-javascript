import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const databaseFile = process.argv[2]; // Get the database file from the arguments
    try {
      const students = await readDatabase(databaseFile);

      let responseText = 'This is the list of our students\n';
      const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      sortedFields.forEach((field) => {
        const names = students[field].join(', ');
        responseText += `Number of students in ${field}: ${students[field].length}. List: ${names}\n`;
      });

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv[2]; // Get the database file from the arguments
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(databaseFile);
      const majorStudents = students[major];

      if (majorStudents) {
        const studentNames = majorStudents.join(', ');
        res.status(200).send(`List: ${studentNames}`);
      } else {
        res.status(200).send('List: ');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
