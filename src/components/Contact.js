import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt, faHome } from "@fortawesome/free-solid-svg-icons";

export default class Contact extends Component {
	constructor (props){
		super(props);

		this.state = {
			fields: {
				name:"",
				mail:"",
				phone:"",
				msg:"",
			},
			validation: {
				name: false,
				mail: false,
				phone: false,
				msg: false
			},
			labelClass: {
				name:"",
				mail:"",
				phone:"",
				msg:"",
			},
		}
	}

	handleChanges(field, e){
		let fields = this.state.fields;
		let labelClass = this.state.labelClass;
		let validation = this.state.validation;
		fields[field] = e.target.value;
		this.setState({fields});

		labelClass[field] = (e.target.value.length > 0) ? "field-fill" : "";
			 
		
		if (field === "name"){
			validation[field] = (e.target.value.length > 1) ? true : false;
		} else if (field === "mail"){
			const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			validation[field] = regex.test(e.target.value);
		} else if (field === "phone"){
			// eslint-disable-next-line
			const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
			validation[field] = regex.test(e.target.value);
		} else {
			validation[field] = (e.target.value.length > 10) ? true : false;
		}

		console.table(validation);
	}

	formIndicator(e){
		let validation = this.state.validation;
		let inputName = e.target.id;
		const forms = {
			name: this.refs.name,
			mail: this.refs.mail,
			phone: this.refs.phone,
			msg: this.refs.msg
		}

		if (validation[inputName]){
			forms[inputName].classList.remove("field-error")
			forms[inputName].classList.add("field-valid")
		} else {
			forms[inputName].classList.remove("field-valid")
			forms[inputName].classList.add("field-error")
		}
		console.log(`indicate ${inputName}`)
	}

	validateForm(e){
		let allValid = true;
		
		const forms = {
			name: this.refs.name,
			mail: this.refs.mail,
			phone: this.refs.phone,
			msg: this.refs.msg
		}

		for (const key in forms) {
			const inputName = forms[key].id

			if (this.state.validation[inputName] === true){
				forms[inputName].classList.remove("field-error")
				forms[inputName].classList.add("field-valid")
			} else {
				forms[inputName].classList.remove("field-valid")
				forms[inputName].classList.add("field-error")
				allValid = false;
			}
		}

		if (!allValid) {e.preventDefault();}
	}

	render() {
		return (
			<section id="contact">
				<div className="wrapper">
					<h2>Contactez-moi</h2>
					<p>Ma formation se termine fin octobre et je suis activement à la recherche d'un stage. Si vous êtes intéressé, vous pouvez me contacter pour me proposer un stage.</p>
					<p>Je suis aussi ouvert aux propositions d'emploi.</p>
					<div className="contact-group">
						<form action="https://formstatic.dev" method="post">
							<input type="hidden" name="$processor" value="email"/>
							<input type="hidden" name="$to" value="fred.vaniss@gmail.com"/>

							<div className="form-group">
								<input type="text" name="name" id="name" onChange={this.handleChanges.bind(this, "name")} onBlur={this.formIndicator.bind(this)} value={this.state.fields["name"]} ref="name" required />
								<label htmlFor="name" className={this.state.labelClass.name}>Nom et prénom</label><br/>
							</div>
							<div className="form-group">
								<input type="email" name="mail" id="mail" onChange={this.handleChanges.bind(this, "mail")} onBlur={this.formIndicator.bind(this)} value={this.state.fields["mail"]} ref="mail" required/>
								<label htmlFor="mail" className={this.state.labelClass.mail}>Adresse e-mail</label><br/>
							</div>
							<div className="form-group">
								<input type="text" name="phone" id="phone" onChange={this.handleChanges.bind(this, "phone")} onBlur={this.formIndicator.bind(this)} value={this.state.fields["phone"]} ref="phone" required/>
								<label htmlFor="phone" className={this.state.labelClass.phone}>Téléphone</label><br/>
							</div>
							<div className="form-group" required>
								<textarea name="msg" id="msg" onChange={this.handleChanges.bind(this, "msg")} onBlur={this.formIndicator.bind(this)} value={this.state.fields["msg"]} ref="msg" required></textarea>
								<label htmlFor="msg" className={this.state.labelClass.msg}>Message</label><br/>
							</div>
							<p className="form-info">Envoie du formulaire géré par <a href="https://formstatic.dev/">Formstatic</a></p>
							<button className="form-submit" onClick={this.validateForm.bind(this)}>Envoyer</button>
						</form>
						<div className="contact-details">
							<h3>Coordonnées</h3>
							<div className="contact-item"><span className="contact-cat"><FontAwesomeIcon icon={faEnvelope}/></span> <p>fred.vaniss@gmail.com</p></div>
							<div className="contact-item"><span className="contact-cat"><FontAwesomeIcon icon={faMobileAlt}/></span> <p>0488/94.18.49</p></div>
							<div className="contact-item"><span className="contact-cat"><FontAwesomeIcon icon={faHome}/></span> <p>6180 Courcelles</p></div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
