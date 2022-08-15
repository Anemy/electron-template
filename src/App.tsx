import React, { useState } from 'react';

import Button from './components/button/Button';
import { sum } from './modules/sum';

import './styles.css';

export const App: React.FunctionComponent = ({}) => {
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <h1 className="title">Title</h1>
      <div>
        Count: {count}
      </div>
      <div>
        <Button
          className="add-one-button"
          onClick={() => setCount(count => sum(count, 1))}
        >Add one</Button>
      </div>
    </div>
  );
}

export default App;