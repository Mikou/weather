import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Widget from './Widget';

class App extends Component {
  render() {
    const style = {
      margin: '10px',
      width: '300px'
    };

    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Widget} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
