import React, { Component } from 'react';

import Button from './components/button/Button';

import './styles.css';

class App extends Component {
  state = {
    count: 0
  }

  onButtonClick = () => {
    console.log('button clicked');

    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    const {
      count
    } = this.state;

    return (
      <div>
        <h1 className="hello-world">Hello Worlds</h1>
        <div>
          Count: {count}
        </div>
        <div>
          <Button
            className="click-button"
            onClick={this.onButtonClick}
            // as="button"
          >Click me</Button>
        </div>
      </div>
    );
  }
}

export default App;