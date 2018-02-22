import React,{ Component } from 'react'
import Login from './Login'


class App extends Component {
	render() {
		return(
			<div id="app-container">
				<h1>
					This is comming from App
				</h1>
				<Login />
			</div>
		)
	}
}

export default App