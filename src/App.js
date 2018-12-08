import React, { Component } from 'react';

import StarRating from './components/StarRating';
import Card from './components/Card';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StarRating number="4.5"/>

        <Card imageUrl="https://picsum.photos/200/300">
          <h3>Card-title</h3>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}

export default App;
