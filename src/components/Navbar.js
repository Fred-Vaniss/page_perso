import React, { Component } from 'react'

export default class Navbar extends Component {
	constructor () {
		super()
		this.state = {
			sticky: false,
			menuOpen: false,
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		if (window.pageYOffset > window.innerHeight-60){
			this.setState({sticky : true})
		} else {
			this.setState({sticky : false})
		}
	}

	openMenu = () => {
		this.setState({menuOpen: !this.state.menuOpen});
		console.log(this.state.menuOpen)
	}

	render(){
		return(
			<div className={(this.state.sticky) ? "nav-bar sticky" : "nav-bar"} ref="navBar">
				<button onClick={() => this.openMenu()} className="burger-button">Menu</button>
				<div className={`wrapper menu ${(this.state.menuOpen) ? "menu-open" : ""}`}>
					<a href="/" className="download-cv">Télécharger le CV</a>
					<nav>
						<ul>
							<li><a href="#about">A propos</a></li>
							<li><a href="#skills">Compétences</a></li>
							<li><a href="#experience">Parcours</a></li>
							<li><a href="#portfolio">Portfolio</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</nav>
				</div>
			</div>
		)
	}
}
