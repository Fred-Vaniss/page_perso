import React, { Component } from 'react'

export default class Navbar extends Component {
	render(){
		return(
			<div className="navBar">
				<a href="/">Télécharger le CV</a>
				<nav>
					<ul>
						<li>A propos</li>
						<li>Compétences</li>
						<li>Parcours</li>
						<li>Portfolio</li>
						<li>Contact</li>
					</ul>
				</nav>
			</div>
		)
	}
}
