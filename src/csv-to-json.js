const fs = require('fs');
const Papa = require('papaparse');

const rawCsv = fs.readFileSync('src/data/student_list.csv', 'utf8');

fs.writeFileSync('src/data/student_list.json', JSON.stringify(Papa.parse(rawCsv), null, '  '));
