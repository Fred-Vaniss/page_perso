import React, { Component } from 'react'

export default class Navbar extends Component {
	constructor () {
		super()
		this.state = {
			sticky: false
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		const navBar = this.refs.navBar

		if (window.pageYOffset > window.innerHeight-60){
			this.setState({sticky : true})
		} else {
			this.setState({sticky : false})
		}

		console.log(window.pageYOffset+" "+this.state.sticky+" "+navBar.offsetTop)
	}

	render(){
		return(
			<div className={(this.state.sticky) ? "nav-bar sticky" : "nav-bar"} ref="navBar">
				<div className="wrapper nav-flex">
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
			</div>
		)
	}
}
