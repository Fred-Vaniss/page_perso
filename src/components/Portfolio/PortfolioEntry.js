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
	
	toggleModal(action, e = null){
		if (action === true){
			this.setState({class: "shown"})
			document.body.style = "overflow-y: hidden"
		} else if (action === "background") {
			if (e.target.className === "portfolio-modal shown"){
				this.toggleModal(false)
			}
		} else {
			this.setState({class: ""})
			document.body.style = ""
		}
	}

	render() {
		const { item, animDelay } = this.props
		const img = require(`./img/${item.img}.jpg`)

		return (
			<>
				<div className="portfolio-entry" data-aos="flip-left" data-aos-delay={animDelay} data-aos-anchor="#portfolio-animate-trigger">
					<div className="portfolio-info">
						<div className="portfolio-info-container">
							<h4>{item.title}</h4>
							<p>{item.techno}</p>
							<div className="portfolio-links">
								{item.url.note && <button className="portfolio-link" title="Plus de détails" onClick={() => this.toggleModal(true)}><span><FontAwesomeIcon icon={faStickyNote}/></span></button>}
								{item.url.git && <a className="portfolio-link" href={item.url.git} target="_blank" rel="noopener noreferrer" title="Dépot Github"><FontAwesomeIcon icon={faGithub}/></a>}
								{item.url.preview && <a className="portfolio-link" href={item.url.preview} target="_blank" rel="noopener noreferrer" title="Page du projet"><FontAwesomeIcon icon={faGlobe}/></a>}
							</div>
						</div>
					</div>
					<img src={img} alt={item.title}/>
				</div>
				{item.url.note && 
					<div className={"portfolio-modal "+this.state.class} onClick={e => this.toggleModal("background", e)}>
						<div className="modal-box">
							<button className="modal-close"><FontAwesomeIcon icon={faTimes} onClick={e => this.toggleModal(false, e)}/></button>
							{item.url.note}
							<div className="modal-bottom">
								{item.url.preview && <a className="form-submit modal-preview-bottom" href={item.url.preview} target="_blank" rel="noopener noreferrer" title="Page du projet">Page du projet</a>} <br/>
								<button className="form-submit modal-close-bottom" onClick={e => this.toggleModal(false, e)}>Fermer</button>
							</div>
						</div>
					</div>

				}

			</>
		)
	}
}
