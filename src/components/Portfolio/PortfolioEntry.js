import React from 'react';
import ReactDom from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faStickyNote, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const PortfolioEntry = props => {

	const { open, setOpen, index, item, animDelay } = props
	
	const toggleModal = (action, e = null) => {
		let modalElement = document.getElementsByClassName("portfolio-modal")[0]
		let bodyElement = document.body
		if (action === true){
			modalElement.addEventListener("click", bgToggleModal)
			bodyElement.style = "overflow-y: hidden"
			modalElement.classList.add("transition")
			modalElement.classList.add("shown")
		} else {
			modalElement.removeEventListener("click", bgToggleModal)
			bodyElement.style = ""
			modalElement.classList.remove("shown")
			setTimeout(() => {
				setOpen(null)
			}, 400);
		}
	}

	const bgToggleModal = e => {
		if (e.target.className === "portfolio-modal transition shown"){
			toggleModal(false)
		}
	}

	
	const img = `assets/img/portfolio/${item.img}.jpg`

	const PortfolioModal = () => {
		if (open !== index || !item.url.note) return null
		return ReactDom.createPortal(
			<>
				<div className="modal-close-container">
					<button className="modal-close"><FontAwesomeIcon icon={faTimes} onClick={e => toggleModal(false, e)}/></button>
				</div>
				{item.url.note[props.lang]}
				<div className="modal-bottom">
					<button className="form-submit modal-close-bottom" onClick={e => toggleModal(false, e)}>{props.lang === "fr" ? "Fermer" : "Close"}</button>
					{item.url.preview && <a className="form-submit modal-preview-bottom" href={item.url.preview} target="_blank" rel="noopener noreferrer" title="Page du projet">{props.lang === "fr" ? "Page du projet" : "Project page"}</a>}
					{item.url.git && <a className="form-submit modal-preview-bottom" href={item.url.git} target="_blank" rel="noopener noreferrer" title="Page du projet">Github</a>}
				</div>
			</>,
			document.getElementById('portal')
		)
	}

	return (
		<>
			<div className="portfolio-entry" data-aos="flip-left" data-aos-delay={animDelay} data-aos-anchor="#portfolio-animate-trigger">
				<div className="portfolio-info">
					<div className="portfolio-info-container">
						<h4>{item.title[props.lang] ? item.title[props.lang] : item.title}</h4>
						<p>{item.techno}</p>
						<div className="portfolio-links">
							{item.url.note && <button className="portfolio-link" title="Plus de détails" onClick={() => {setOpen(index); toggleModal(true)}}><span><FontAwesomeIcon icon={faStickyNote}/></span></button>}
							{item.url.git && <a className="portfolio-link" href={item.url.git} target="_blank" rel="noopener noreferrer" title="Dépot Github"><FontAwesomeIcon icon={faGithub}/></a>}
							{item.url.preview && <a className="portfolio-link" href={item.url.preview} target="_blank" rel="noopener noreferrer" title="Page du projet"><FontAwesomeIcon icon={faGlobe}/></a>}
						</div>
					</div>
				</div>
				<img src={img} alt={item.title}/>
			</div>
			<PortfolioModal/>
		</>
	)
}

export default PortfolioEntry;