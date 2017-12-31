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
        </div>
      </div>
    );
  }
}

export default App;
