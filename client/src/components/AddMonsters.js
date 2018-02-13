import React, { Component } from 'react';
import axios from 'axios';

class AddMonsters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      weapon: 'Finger Toes',
      weapons: [
        'Smelly Feet',
        'Spike Club',
        'Rusty Sword'
      ]
    }
    console.log(props)
    this.AddNewMonster = this.AddNewMonster.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  AddNewMonster(e){
    e.preventDefault();
    this.props.AddMonster({
      name: this.state.name,
      age: this.state.age,
      weapons: this.state.weapon
    });
    axios.post('/api/monster', {
      name: this.state.name,
      age: this.state.age,
      weapon: this.state.weapon
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

//   axios.post('/contact/email', this.prepareOptions()).then((respone) => {
//     console.log(respone);
//     })
//   .catch((error) => {
//     console.log(error);
//   });
// }


// prepareOptions(){
//   const createEmail = {
//     firstName: this.state.email,
//     lastName: this.state.lastName,
//     email: this.state.email,
//     message: this.state.message

//   }
//   return createEmail;
//
//}

  render() {
    let MonsterWeaponList = this.state.weapons.map((weapon, index) => {
      return (
        <option key={index} value={weapon}>
          {weapon}
        </option>
      )
    });

    return (
      <form onSubmit={this.AddNewMonster }>
        <label id="New">Name:</label>
          <input id="NewMonsterName" name="name" type="text" onChange={ this.handleInputChange }/>
        <br/>
        <label id="NewMonsterAge">Age:</label>
          <input id="NewMonsterAge" name="age" type="number" onChange={ this.handleInputChange }/>
        <br/>
        <label id="NewMonsterWeapon">Weapon:</label>
          <select id="NewMonsterWeapon" name="weapon"  onChange={ this.handleInputChange }>
            { MonsterWeaponList }
          </select>
        <br/>
        <button>Add Monster</button>
      </form>
    );
  }
}

export default AddMonsters;