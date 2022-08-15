import React, { Component } from 'react';
import fs from 'fs';

const airports = require('../../../../Desktop/airports.json');

import Button from './components/button/Button';
import { sum } from './modules/sum';

import './styles.css';

class App extends Component {
  state = {
    count: 0
  }

  constructor(props: any) {
    super(props);
    const airportsMap: any = {};
    airports.forEach((airport: any) => {
      if (airportsMap[airport._id]) {
        console.log('duplicate id', airport._id);
      }
      airportsMap[airport._id] = true;
    });
    console.log('done looking for duplicates', Object.keys(airportsMap).length);
  }

  onButtonClick = () => {
    console.log('button clicked');

    // fs.readFileSync('');

    this.setState({
      count: sum(this.state.count, 1)
    });
  }

  render() {
    const {
      count
    } = this.state;

    return (
      <div>
        <h1 className="title">Title</h1>
        <div>
          Count: {count}
        </div>
        <div>
          <Button
            className="add-one-button"
            onClick={this.onButtonClick}
          >Add one</Button>
        </div>
      </div>
    );
  }
}

export default App;