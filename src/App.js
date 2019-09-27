import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '36px',
      color: 'white',
      fontSize: '12px'
    };

    return (
      <div style={style}>
        Hello React - How are you?
      </div>
    );
  }
}

export default App;
