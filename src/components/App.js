import React, { Component } from 'react';

import Nav from './Nav';
import StudentTable from './StudentTable';

import jsonData from '../data/student_list.json';

const dataList = jsonData.data;

class App extends Component {
  state = { year: undefined };

  updateYear = year => this.setState({ year });

  render() {
    const years = dataList.map(([year]) => year).filter((year, pos, arr) => !isNaN(year) && arr.indexOf(year) === pos);

    return (
      <div>
        <Nav updateYear={this.updateYear} years={years} />
        <div style={{ margin: '0 auto', maxWidth: 960 }}>
          <div style={{ marginTop: 50 }}>
            <StudentTable dataList={dataList} year={this.state.year} />
          </div>
          <div style={{ textAlign: 'center' }}>
            Disclaimer: This page is maintained by Chinese students. The only purpose of this page is to help the communications among students. For any questions, please contact langx239@umn.edu.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
