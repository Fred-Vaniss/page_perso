import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt, faHome } from "@fortawesome/free-solid-svg-icons";
import {LocContact} from './Localization'

const Contact = props => {


	return (
		<section id="contact">
			<div className="wrapper">
				{LocContact[props.lang]}
				<div className="contact-details" data-aos="fade-up">
					<div className="contact-item"><a className="contact-cat" href="mailto:fred.vaniss@gmail.com" title="E-mail" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a> <p>fred.vaniss@gmail.com</p></div>
					<div className="contact-item"><a className="contact-cat" href="tel:+32488941849" target="_blank" title="Téléphone" rel="noopener noreferrer"><FontAwesomeIcon icon={faMobileAlt}/></a> <p>0488/94.18.49</p></div>
					<div className="contact-item"><a className="contact-cat" href="https://goo.gl/maps/UEND4weCUz3Fskbs8" title="Ouvrir Google Maps" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faHome}/></a> <p>6180 Courcelles</p></div>
				</div>
			</div>
		</section>
	)
	
}

export default Contact;