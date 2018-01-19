import React, { Component } from 'react'
import ReactDOM from 'react-dom'

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
    navbarHeight: 50,
    year: undefined
  }

  componentDidMount() {
    const navbarHeight = ReactDOM.findDOMNode(this.nav).offsetHeight
    if (navbarHeight !== this.state.navbarHeight) {
      this.setState({ navbarHeight })
    }
  }

  updateDataSource = type => this.setState({ dataListName: type })

  updateYear = year => this.setState({ year })

  render() {
    const { dataListName, navbarHeight } = this.state

    const years = data[dataListName]
      .map(([year]) => year)
      .filter((year, pos, arr) => !isNaN(year) && arr.indexOf(year) === pos)

    return (
      <div>
        <Nav
          ref={nav => (this.nav = nav)}
          updateDataSource={this.updateDataSource}
          updateYear={this.updateYear}
          years={years}
        />
        <div style={{ margin: '0 auto', maxWidth: 1080 }}>
          <div style={{ marginTop: navbarHeight }}>
            <StudentTable dataList={data[dataListName]} year={this.state.year} />
          </div>
          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <b>Disclaimer:</b> This page is maintained by students of School of Statistics, University of Minnesota. The
            only purpose of this page is to help the communications among students. For any questions, please contact
            Community.umnstatsphd@gmail.com.
          </div>
        </div>
      </div>
    )
  }
}

export default App
