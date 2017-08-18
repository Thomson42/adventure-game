import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: rooms[0],
      items: item [],
      player : {
        name: 'Percy Prankster',
        inventory: []
      }

    }
    this.handleExit = this.handleExit.bind(this);
    this.handlePickup = this.handlePickup.bind(this);

  }



handleExit() {
  this.setState({ room });

}

handlePickup() {
  const { room, player } = this.state;
  const index = room.items.indexOf(item);
  if(index > -1) room.items.splice(index, 1);

  player.inventory.push(item);

  this.setState({
    room, player
  })
}




  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
