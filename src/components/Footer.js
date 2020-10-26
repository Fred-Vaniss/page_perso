import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default class Footer extends Component {
	render() {
		const LogoFooter = `assets/img/logo-footer.svg`
		return (
			<footer className="footer">
				<div className="wrapper">
				<div className="footer-logo">
					<img src={LogoFooter} alt="Logo"/>
				</div>
				<div className="links">
					<ul>
						<li>
							<a href="https://github.com/Fred-Vaniss/" title="Mon profil GitHud" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/fred-vaniss/" title="Mon profil LinkedIn" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
						</li>
					</ul>
				</div>
				</div>
			</footer>
		)
	}
}
