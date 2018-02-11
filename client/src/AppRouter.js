import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './App';
import MonsterId from './components/MonsterId';
import UpdateMonster from './components/UpdateMonster';
import * as MonsterActions from './actions/ActionsMonster';
import { bindActionCreators } from 'redux';

// App.js only delegates the different routes
class AppRouter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			create: this.props.actions.addMonster,
			update: this.props.actions.updateMonster,
			delete: this.props.actions.deleteMonster
		}
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<BrowserRouter>
					<Switch>UpdateMonsterStuff
						<Route exact path="/" render={ ({ match, history }) => <App match={ match } history={ history } readMonster ={this.props.Monsters} addMonster={ this.state.create } DeleteMonster={ this.state.delete }/>} />
						<Route exact path="/monster/:id" render={ ({ match, history }) => <MonsterId match={ match } history={ history } readMonster ={this.props.Monsters}/>} />
						<Route exact path="/monster/update/:id" render={ ({ match, history }) => <UpdateMonster match={ match } history={ history }  readMonster ={this.props.Monsters} UpdateMonsterStuff={ this.state.update } />} />
					</Switch>
				</BrowserRouter>

			</div>
    	);
	}
}

const mapStateToProps = state => ({
	Monsters: state.Monsters

})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(MonsterActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppRouter)