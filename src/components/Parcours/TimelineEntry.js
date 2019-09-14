import React, { Component } from 'react';
import { faMapMarkerAlt, faBook, faBuilding, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

export default class TimelineEntry extends Component {

	constructor(props){
		super(props);
		this.state={
			category: this.category(),
			list: this.list()
		}
	}
	
	category = () => {
		switch (this.props.type) {
			case "formation":
				return <FontAwesomeIcon icon={faBook}/>
				
			case "entreprise":
				return <FontAwesomeIcon icon={faBuilding}/>

			case "graduation":
				return <FontAwesomeIcon icon={faGraduationCap}/>

			default:
				break;
		}
	}

	list = () => {
		if (this.props.list.length > 0) {
			const innerList = this.props.list.map(item => {
				return(
					<li>{item}</li>
				)
			})
			return (
				<ul>
					{innerList}
				</ul>
			)
		}
	}

	render() {
		return (
			<div class="timeline-entry">
				<div class="work-category">
					{this.state.category}
				</div>
				<div class="work-place">
					<h3>{this.props.entreprise}</h3>
					<div class="location"><FontAwesomeIcon icon={faMapMarkerAlt}/> {this.props.place}</div>
				</div>

				<div class="work-meta">
					<div class="title">{this.props.title}</div>
					<div class="time">{this.props.time}</div>
				</div>

				<div class="desc">
					<p>{this.props.desc}</p>
					{this.state.list}
				</div>
			</div>
		)
	}
}
