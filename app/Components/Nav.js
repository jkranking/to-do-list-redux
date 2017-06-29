import React, { Component } from 'react'
import { IndexLink } from 'react-router'

export default class Nav extends Component {
	render(){
		return (
			<div>
		  	<IndexLink activeStyle={{color:'#53acff'}} to='/'>Home</IndexLink>&nbsp;
		  	<IndexLink activeStyle={{color:'#53acff'}} to='/list'>To Do List</IndexLink>
	  	</div>
		)
	}
}
