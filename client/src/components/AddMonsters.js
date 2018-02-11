import React, { Component } from 'react';

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

  }

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