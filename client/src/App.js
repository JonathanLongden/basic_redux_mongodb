import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListMonsters from './components/ListMonsters.js'

class App extends Component {
  constructor(props) {
		super(props);
	}
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ListMonsters readMonster ={this.props.readMonster} AddMonster = {this.props.addMonster} DeleteMonster={ this.props.DeleteMonster } />
      </div>
    );
  }
}

export default App;
