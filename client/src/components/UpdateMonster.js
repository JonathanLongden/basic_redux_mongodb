import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class UpdateMonster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      name: "",
      age: "",
      weapon: ""
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeWeapon = this.handleChangeWeapon.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  componentWillMount() {
    this.setState(
      this.props.readMonster.find(monster => monster.id === parseInt(this.state.id))  
    )
  }

    handleChangeName(event) {
      this.setState({name: event.target.value});
    }
    handleChangeAge(event) {
      this.setState({age: event.target.value});
    }
    handleChangeWeapon(event) {
      this.setState({temperment: event.target.value});
    }
    handleSubmit(event) {
      event.preventDefault()
      var UpdateMonsterStats = {
        id: this.state.id,
        name: this.state.name,
        age: this.state.age,
        weapon: this.state.weapon
      };
      console.log(UpdateMonsterStats)
      this.props.UpdateMonsterStuff(UpdateMonsterStats);
    }

  render() {
    
    return (
      <div>
     <form onSubmit={this.handleSubmit} >
          Name:<br/>
          <input type="text" name="name" onChange={this.handleChangeName} value={this.state.name}/><br/>
          Age:<br/>
          <input type="number" name="age" onChange={this.handleChangeAge} value={this.state.age}/><br/>
          Weapon:<br/>
          <input type="text" name="weapon" onChange={this.handleChangeWeapon} value={this.state.weapon}/><br/>
          <button>Update Monster!!!</button> 
          <Link to={'/'}><button>Back to MonsterList</button></Link>                               
        </form>
        </div>
    );
  }
}

export default UpdateMonster;


