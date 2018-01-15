const fs = require('fs')
const Papa = require('papaparse')

const files = ['student_list', 'graduate_student_list']

files.forEach(file => {
  const rawCsv = fs.readFileSync('src/data/' + file + '.csv', 'utf8')

  fs.writeFileSync('src/data/' + file + '.json', JSON.stringify(Papa.parse(rawCsv), null, '  '))
})
