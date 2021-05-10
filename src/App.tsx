import React, { Component } from 'react';

import Button from './components/button/Button';
import { sum } from './modules/sum';

import './styles.css';

class App extends Component {
  state = {
    count: 0
  }

  onButtonClick = () => {
    console.log('button clicked');

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