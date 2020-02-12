import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt, faHome } from "@fortawesome/free-solid-svg-icons";

export default class Contact extends Component {

	render() {
		return (
			<section id="contact">
				<div className="wrapper">
					<h2>Contactez-moi</h2>
					<div className="contact-note" data-aos="fade-up">
						<p>Je suis actuellement disponible pour tout recrutement.</p>
						<p>Si vous êtes intéressé par mes compétences et que vous souhaitez me recruter ou si vous avez des questions à me poser, vous pouvez me contacter par e-mail ou par téléphone.</p>
						<p>Je vous répondrai dès que possible.</p>
					</div>
					<div className="contact-details" data-aos="fade-up">
						<div className="contact-item"><a className="contact-cat" href="mailto:fred.vaniss@gmail.com" title="E-mail" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a> <p>fred.vaniss@gmail.com</p></div>
						<div className="contact-item"><a className="contact-cat" href="tel:+32488941849" target="_blank" title="Téléphone" rel="noopener noreferrer"><FontAwesomeIcon icon={faMobileAlt}/></a> <p>0488/94.18.49</p></div>
						<div className="contact-item"><a className="contact-cat" href="https://goo.gl/maps/UEND4weCUz3Fskbs8" title="Ouvrir Google Maps" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faHome}/></a> <p>6180 Courcelles</p></div>
					</div>
				</div>
			</section>
		)
	}
}
