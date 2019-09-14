import React, { Component } from 'react';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

export default class TimelineEntry extends Component {
	render() {
		return (
			<div class="timeline-entry">
				<div class="work-meta">
					<div class="title">{this.props.title}</div>
					<div class="time">{this.props.time}</div>
				</div>
				<div class="work-place">
					<h3>BeCode</h3>
					<div class="location"><FontAwesomeIcon icon={faMapMarkerAlt}/> {this.props.place}</div>
				</div>
				<div class="desc">
					<p>{this.props.desc}</p>
				</div>
			</div>
		)
	}
}
