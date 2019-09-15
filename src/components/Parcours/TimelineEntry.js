import React, { Component } from 'react';
import { faMapMarkerAlt, faBook, faBuilding, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TimelineEntry extends Component {

	render() {
		const { item } = this.props

		return <div class="timeline-entry">
				<div class="work-category">
					{{	//? Equivalent d'un switch
						formation:
							<FontAwesomeIcon icon={faBook}/>,
						entreprise:
							<FontAwesomeIcon icon={faBuilding}/>,
						graduation:
							<FontAwesomeIcon icon={faGraduationCap}/>
					}[item.type]}
				</div>
				<div class="work-place">
					<h3>{item.entreprise}</h3>
					<div class="location"><FontAwesomeIcon icon={faMapMarkerAlt}/> {item.place}</div>
				</div>

				<div class="work-meta">
					<div class="title">{item.title}</div>
					<div class="time">{item.time}</div>
				</div>

				<div class="desc">
					<p>{item.desc}</p>
					{
						item.list.length && 
						<ul>
							{item.list.map((itemList, index) => {
								return <li key={`${item.id}_${index}`}>{itemList}</li>
							})}
						</ul>
					}
				</div>
			</div>
	}
}
