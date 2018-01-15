import React, { Component } from 'react'

import Nav from './Nav'
import StudentTable from './StudentTable'

import studentData from '../data/student_list.json'
import graduateStudentData from '../data/graduate_student_list.json'

const data = {
  current: studentData.data,
  graduate: graduateStudentData.data
}

class App extends Component {
  state = {
    dataListName: 'current',
    year: undefined
  }

  updateDataSource = type => this.setState({ dataListName: type })

  updateYear = year => this.setState({ year })

  render() {
    const { dataListName } = this.state

    const years = data[dataListName]
      .map(([year]) => year)
      .filter((year, pos, arr) => !isNaN(year) && arr.indexOf(year) === pos)

    return (
      <div>
        <Nav updateDataSource={this.updateDataSource} updateYear={this.updateYear} years={years} />
        <div style={{ margin: '0 auto', maxWidth: 1080 }}>
          <div style={{ marginTop: 50 }}>
            <StudentTable dataList={data[dataListName]} year={this.state.year} />
          </div>
          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <b>Disclaimer:</b> This page is maintained by Chinese students. The only purpose of this page is to help the
            communications among students. For any questions, please contact langx239@umn.edu.
          </div>
        </div>
      </div>
    )
  }
}

export default App
