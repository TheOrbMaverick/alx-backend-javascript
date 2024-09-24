import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
    if (!filePath) {
        reject(new Error('Cannot load the database'))
    }
    if (filePath) {
        fs.readFile(dataPath, (error, data) => {
            if (error) {
                reject(new Error('Cannot load Database'));
            }
            if (data) {
                const lines = data.toString('utf-8').trim().split('\n')
                const stdGrp = {};
                const dbField = lines[0].split(',');
                const names = dbField.slice(0, dbField.length - 1);

                for (const line of lines.slice(1)) {
                    const record = line.split(',');
                    const values = record.slice(0, record.length - 1);
                    const field = record[record.length - 1];
                    if (!Object.keys(stdGrp).includes(field)) {
                        stdGrp[field] = [];
                    }
                    const entries = names
                    .map((propName, id) => [propName, values[id]]);
                    stdGrp[field].push(Object.fromEntries(entries));
                }
                resolve(stdGrp)
            }
        });
    }
});

export default readDatabase;
module.exports = readDatabase;
