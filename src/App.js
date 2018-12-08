import React, { Component } from 'react';

import StarRating from './components/StarRating';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StarRating number="4.5"/>
      </div>
    );
  }
}

export default App;
