import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LogoFooter from "../assets/logo-footer.svg"


export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="wrapper">
				<div className="footer-logo">
					<img src={LogoFooter} alt="Logo"/>
				</div>
				<div className="links">
					<ul>
						<li>
							<a href="https://github.com/Fred-Vaniss/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/fred-vaniss/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
						</li>
					</ul>
				</div>
				</div>
			</footer>
		)
	}
}
