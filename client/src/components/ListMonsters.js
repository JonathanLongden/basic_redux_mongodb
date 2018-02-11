import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddMonsterPage from './AddMonsters';

class ListMonsters extends Component {
  constructor(props) {
    super(props);
        this.state = {        
        }
    }

  DeleteThisMonster(id) {
    this.props.DeleteMonster({
      id
    });
  }


  render() {
    let MonsterList =  this.props.readMonster.map((monster) => {
      return (
        <li key={monster.id}>
            <ul> Name: {monster.name} </ul>
            <ul> Age : {monster.age}  </ul>
            <ul> Weapon : {monster.weapon} </ul> 
            <br/>
            <Link to={'/monster/' + monster.id } monster={monster}>Monster Details</Link>
            <br/>
            <button onClick={this.DeleteThisMonster.bind(this, monster.id)}className="btn btn-success">Delete</button>      
        </li>
      )
    });
    return (
      <div>
          {MonsterList}
        <br/>
        <br/>
        <AddMonsterPage AddMonster = {this.props.AddMonster}/>
       
      </div>
    );
  }
}

export default ListMonsters;
