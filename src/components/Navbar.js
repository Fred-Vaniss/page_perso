import React, { Component } from 'react'

export default class Navbar extends Component {
	render(){
		return(
			<div className="nav-bar">
				<a href="/" className="download-cv">Télécharger le CV</a>
				<nav>
					<ul>
						<li><a href="/">A propos</a></li>
						<li><a href="/">Compétences</a></li>
						<li><a href="/">Parcours</a></li>
						<li><a href="/">Portfolio</a></li>
						<li><a href="/">Contact</a></li>
					</ul>
				</nav>
			</div>
		)
	}
}
