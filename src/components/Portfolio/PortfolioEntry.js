import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faStickyNote, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default class PortfolioEntry extends Component {
	constructor(){
		super()

		this.state={
			class: ""
		}
	}
	
	toggleModal(action){
		console.log('action: '+action)
		if (action){
			this.setState({class: "shown"})
			document.body.style = "overflow-y: hidden"
		} else {
			this.setState({class: ""})
			document.body.style = ""
		}
	}

	render() {
		const { item, number } = this.props
		const img = require(`./img/${item.img}.jpg`)
		console.log(this.props)

		return (
			<>
				<div className="portfolio-entry">
					<div className="portfolio-info">
						<div className="portfolio-info-container">
							<h4>{item.title}</h4>
							<p>{item.techno}</p>
							<div className="portfolio-links">
								{item.url.note && <button className="portfolio-link" title="Plus de détails" onClick={() => this.toggleModal(true)} data-port-id={number}><span><FontAwesomeIcon icon={faStickyNote}/></span></button>}
								{item.url.git && <a className="portfolio-link" href={item.url.git} target="_blank" rel="noopener noreferrer" title="Dépot Github"><FontAwesomeIcon icon={faGithub}/></a>}
								{item.url.preview && <a className="portfolio-link" href={item.url.preview} target="_blank" rel="noopener noreferrer" title="Page du projet"><FontAwesomeIcon icon={faGlobe}/></a>}
							</div>
						</div>
					</div>
					<img src={img} alt={item.title}/>
				</div>
				{item.url.note && 
					<div id={"modal-port-"+number} className={"portfolio-modal "+this.state.class}>
						<div className="modal-box">
							<button className="modal-close"><FontAwesomeIcon icon={faTimes} onClick={() => this.toggleModal(false)}/></button>
							{item.url.note}
							<button className="form-submit modal-close-bottom" onClick={() => this.toggleModal(false)}>Fermer</button>
						</div>
					</div>

				}

			</>
		)
	}
}
