import React from 'react'

export const Login = ({username,password}) => {
	return(
		<div id="login">
			<h1>Test</h1>
			<p>This text is comming from Login.js</p>

			<label>Username: </label>
			<input type="text" defaultValue={username} />

			<label>Password: </label>
			<input type="password" defaultValue={password} />
		</div>
	)
}

Login.defaultProps = {
	username: "wcoronell",
	password: "secret"
}