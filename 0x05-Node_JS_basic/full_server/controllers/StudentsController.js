import { readDatabase } from "../utils";

class StudentsController {
    static getAllStudents(req, res) {
        const databasePath = process.argv[2];

        readDatabase(databasePath)
            .then((students) => {
                let responseText = 'This is the list of our students\n';
                const fields = Object.keys(students).sort();

                fields.forEach((field) => {
                    const list = students[field].join(', ');
                    responseText += `Number of students in ${field}: ${students[field].length}. List: ${list}\n`;
                });
                res.status(200).send(responseText.trim());
            })
            .catch((err) => {
                res.status(500).send(err.message)
            });
    }

    static getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        const databasePath = process.argv[2];

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        readDatabase(databasePath)
            .then((students) => {
                const list = students[major]?.join(', ') || '';
                res.status(200).send(`List: ${list}`);
            })
            .catch(() => {
                res.status(500).send(err.message)
            });
    }
}

export default StudentsController;
