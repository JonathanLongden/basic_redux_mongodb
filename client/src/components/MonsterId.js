import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';

class MonsterId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id
    }
  }

  componentWillMount(){    
    this.setState(
        this.props.readMonster.find(Monster => parseInt(Monster.id) === parseInt(this.state.id))
    );
  }

  render() {;
    return (
      <div>
        <h3>Monster Details</h3>
        <ul>
          <div>
            <li>Name: { this.state.name }</li>
            <li>Age: { this.state.age }</li>
            <li>Weapon: { this.state.weapon }</li>
            </div>
        </ul>
        <Link to='/'><button>Back</button></Link> 
        <Link to={ '/monster/update/' + this.state.id }><button>Edit</button></Link>
      </div>
    );
  }
}

export default MonsterId;