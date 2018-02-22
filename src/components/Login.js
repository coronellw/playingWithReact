import React from 'react'
import { Button, Form, ControlLabel, FormControl } from 'react-bootstrap'

class Login extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			username: 'wcoronell',
			password: 'secret'
		}
	}

	render(){
		return(
			<div id="login-wrapper">
				<form>
					<ControlLabel>Username:</ControlLabel>
					<FormControl type="text" defaultValue={this.state.username}></FormControl>

					<ControlLabel>Password:</ControlLabel>
					<FormControl type="password" defaultValue={this.state.password}></FormControl>

					<Button bsStyle="success">Log me in</Button>
					<Button bsStyle="danger">Cancel</Button>
				</form>
			</div>
		)
	}
}

export default Login