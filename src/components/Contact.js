import React, { Component } from 'react'

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
			validation: {},
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
			let regex = ""
			validation[field] = regex.test(e.target.value)
		}
	}



	render() {
		return (
			<section id="contact">
				<div className="wrapper">
					<h2>Contactez-moi</h2>
					<form action="#" method="post">
						<div className="form-group">
							<input type="text" name="name" id="name" onChange={this.handleChanges.bind(this, "name")} value={this.state.fields["name"]} required />
							<label htmlFor="name" className={this.state.labelClass.name}>Nom et prénom</label><br/>
						</div>
						<div className="form-group">
							<input type="email" name="mail" id="mail" onChange={this.handleChanges.bind(this, "mail")} value={this.state.fields["mail"]} required/>
							<label htmlFor="mail" className={this.state.labelClass.mail}>Adresse e-mail</label><br/>
						</div>
						<div className="form-group">
							<input type="text" name="phone" id="phone" onChange={this.handleChanges.bind(this, "phone")} value={this.state.fields["phone"]} required/>
							<label htmlFor="phone" className={this.state.labelClass.phone}>Téléphone</label><br/>
						</div>
						<div className="form-group" required>
							<textarea name="msg" id="msg" onChange={this.handleChanges.bind(this, "msg")} value={this.state.fields["msg"]} required></textarea>
							<label htmlFor="msg" className={this.state.labelClass.msg}>Message</label><br/>
						</div>
					</form>
				</div>
			</section>
		)
	}
}
