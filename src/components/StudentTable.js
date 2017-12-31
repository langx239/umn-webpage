import React from 'react';

const StudentTable = ({ dataList, year }) => {
  const headers = dataList[0];
  const studentData = dataList.slice(1);
  const filteredStudentData = year ? studentData.filter(s => s[0] === year) : studentData;

  return (
    <table className="pt-table pt-interactive" style={{ minWidth: '100%' }}>
      <thead>
        <tr>{headers.map((header, i) => <th key={i}>{header}</th>)}</tr>
      </thead>
      <tbody>
        {filteredStudentData.map((student, iStudent) => (
          <tr key={iStudent}>{student.map((value, iValue) => <td key={iValue}>{value}</td>)}</tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
