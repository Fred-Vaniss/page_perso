import React, { Component } from 'react'
import { Navbar } from './'

export default class Intro extends Component {
	render(){
		return(
			<section className="intro">
				<div className="wrapper">
					<h1>Frédérick Van Isschot</h1>
					<h2>Développeur web junior</h2>
					<Navbar/>
				</div>
			</section>
		)
	}
}