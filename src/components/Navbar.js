import React, { Component } from 'react'
import Cv from '../assets/cv.pdf'

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

	closeMenu = () => {
		if (this.state.menuOpen === true){
			this.setState({menuOpen: false});
		}
	}

	render(){
		return(
			<>
				<div className={`menu-dim ${this.state.menuOpen ? "dimmer" : ""}`} onClick={() => this.closeMenu()}></div>
				<div className={(this.state.sticky) ? "nav-bar sticky" : "nav-bar"} ref="navBar">
					<button onClick={() => this.openMenu()} className="burger-button">Menu</button>
					<div className={`wrapper menu ${(this.state.menuOpen) ? "menu-open" : ""}`}>
						<a href={Cv} className="download-cv">Télécharger le CV</a>
						<nav>
							<ul>
								<li><a href="#about" onClick={() => this.closeMenu()}>À propos</a></li>
								<li><a href="#skills" onClick={() => this.closeMenu()}>Compétences</a></li>
								<li><a href="#experience" onClick={() => this.closeMenu()}>Parcours</a></li>
								<li><a href="#portfolio" onClick={() => this.closeMenu()}>Portfolio</a></li>
								<li><a href="#contact" onClick={() => this.closeMenu()}>Contact</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</>
		)
	}
}
