import React, { Component } from 'react';
import logo from './logo.svg';
import AspirationsList from './AspirationsList';
import AspirationMaker from './AspirationMaker';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      aspirations: [
        {id: 2, aspiration: 'Go skydiving', why: 'To push myself out of my comfort zone'},
        {id: 4, aspiration: 'Learn salsa dancing', why: 'Impress boys'}]
    }
  }

  addAspiration = (aspiration) => {
    this.setState({aspirations: [...this.state.aspirations, aspiration]})
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome To Your Aspirations</h2>
        <AspirationMaker addAspiration={this.addAspiration}/>
        <AspirationsList aspiration={this.state.aspirations}/>
      </div>
    )
  }
}

export default App;
