import React, { Component } from 'react';
import { faMapMarkerAlt, faBook, faBuilding, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TimelineEntry extends Component {

	render() {
		const { item } = this.props

		return <div className="timeline-entry">
				<div className="work-category">
					{{	//? Equivalent d'un switch
						formation:
							<FontAwesomeIcon icon={faBook}/>,
						entreprise:
							<FontAwesomeIcon icon={faBuilding}/>,
						graduation:
							<FontAwesomeIcon icon={faGraduationCap}/>
					}[item.type]}
				</div>
				<div className="work-place">
					<h3>{item.entreprise}</h3>
					<div className="location"><FontAwesomeIcon icon={faMapMarkerAlt}/> {item.place}</div>
				</div>

				<div className="work-meta">
					<div className="title">{item.title}</div>
					<div className="time">{item.time}</div>
				</div>

				<div className="desc">
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
