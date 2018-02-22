import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppRoutes } from './AppRoutes'
import './index.css'

render(
	<AppRoutes />, document.getElementById("react-container")
)