import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default class PortfolioEntry extends Component {
	render() {
		const { item } = this.props
		const img = require(`./img/${item.img}.jpg`)

		return (
			<div className="portfolio-entry">
				<div className="portfolio-info">
					<div className="portfolio-info-container">
						<h4>{item.title}</h4>
						<p>{item.techno}</p>
						<div className="portfolio-links">
							<a className="portfolio-link" href={item.url.git} target="_blank" rel="noopener noreferrer" title="Dépot Github"><FontAwesomeIcon icon={faGithub}/></a>
							{item.url.preview && <a className="portfolio-link" href={item.url.preview} target="_blank" rel="noopener noreferrer" title="Page du projet"><FontAwesomeIcon icon={faGlobe}/></a>}
						</div>
					</div>
				</div>
				<img src={img} alt={item.title}/>
			</div>
		)
	}
}
