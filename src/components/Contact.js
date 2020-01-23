import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt, faHome } from "@fortawesome/free-solid-svg-icons";

export default class Contact extends Component {

	render() {
		return (
			<section id="contact">
				<div className="wrapper">
					<h2>Contactez-moi</h2>
					<div className="contact-note">
						<p>Je suis actuellement disponible pour tout recrutement.</p>
						<p>Vous avez besoin de mes services? Vous avez un projet à me confier? Ou vous souhaitez tout simplement discuter? N'hésitez pas à me contacter par e-mail ou par téléphone. </p>
						<p>Je vous répondrai dès que possible.</p>
					</div>
					<div className="contact-details">
						<div className="contact-item"><a className="contact-cat" href="mailto:fred.vaniss@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a> <p>fred.vaniss@gmail.com</p></div>
						<div className="contact-item"><a className="contact-cat" href="tel:+32488941849"><FontAwesomeIcon icon={faMobileAlt}/></a> <p>0488/94.18.49</p></div>
						<div className="contact-item"><a className="contact-cat" href="https://goo.gl/maps/UEND4weCUz3Fskbs8"><FontAwesomeIcon icon={faHome}/></a> <p>6180 Courcelles</p></div>
					</div>
				</div>
			</section>
		)
	}
}
