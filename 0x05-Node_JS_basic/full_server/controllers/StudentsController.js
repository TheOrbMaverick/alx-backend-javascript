import readDatabase from '../utils';

const MAJORS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv.length > 2 ? process.argv[2] : '';
    
    readDatabase(databaseFile)
    .then((students) => {
        const resParts = ['This is the list of our students'];
    
        const cfunction = (first, second) => {
            if (first[0].toLowerCase() < second[0].toLowerCase()) {
                return -1;
            }
            if (first[0].toLowerCase() > second[0].toLowerCase()) {
                return 1;
            }
            return 0;
        };
        for (const [f, g] of Object.entries(students).sort(cfunction)) {
            resParts.push([
                `Number of students in ${f}: ${g.length}.`,
                'List:',
                g.map((stud) => stud.firstname).join(', '),
            ].join(' '));
        }
        res.status(200).send(resParts.join('\n'));
    })
    .catch((err) => {
        res
        .status(500)
        .send(err instanceof Error ? err.message : err.toString())
    });
  }

  static async getAllStudentsByMajor(req, res) {
    const databaseFile = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    if (!MAJORS.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(databaseFile)
    .then((stdGroup) => {
        let resTxt = '';

        if (Object.keys(stdGroup).includes(major)) {
            const group = stdGroup[major]
            resTxt = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        res.status(200).send(resTxt)
    })
    .catch((error) => {
      res.status(500)
      .send(error instanceof Error ? error.message : error.toString());
    })
  }
}

export default StudentsController;
module.exports = StudentsController;
