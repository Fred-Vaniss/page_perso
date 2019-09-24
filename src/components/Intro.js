import React, { Component } from 'react'
import { Navbar } from './'
import Logo from '../assets/logo-bg.svg'

export default class Intro extends Component {
	render(){
		return(
			<section className="intro">
				<div className="wrapper">
					<div className="logo-container">
						<img src={Logo} alt="Logo" className="logo-big"/>
					</div>
					<div className="intro-title">
						<h1>Frédérick Van Isschot</h1>
						<h2>Développeur web junior</h2>
					</div>
					<Navbar/>
				</div>
			</section>
		)
	}
}