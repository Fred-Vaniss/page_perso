import React, { Component } from 'react'
import { Navbar } from './'
import Logo from '../assets/logo-bg.svg'

export default class Intro extends Component {
	render(){
		return(
			<section id="intro">
				<div className="wrapper fullscreen">
					<div className="logo-container">
						<img src={Logo} alt="Logo" className="logo-big puff-in-center"/>
					</div>
					<div className="intro-title animated fadeInDown">
						<h1>Frédérick Van Isschot</h1>
						<h2>Développeur web junior</h2>
					</div>
				</div>
				<Navbar/>
			</section>
		)
	}
}