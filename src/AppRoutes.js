import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { App } from './components/App'
import { Login } from './components/Login'

const AppRoutes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={ Login } />
			<Route path="/Home" component={ App } />
		</Switch>
	</BrowserRouter>
)

export { AppRoutes }