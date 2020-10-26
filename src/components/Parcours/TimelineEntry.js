import React from 'react';
import { faMapMarkerAlt, faBook, faBuilding, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TimelineEntry = props => {


		const { item, lang } = props

		return <div className="timeline-entry" data-aos="fade-up">
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
					<div className="title">{item[lang].title}</div>
					<div className="time">{item[lang].time}</div>
				</div>

				<div className="desc">
					{item[lang].desc}
					{
						item[lang].list && 
						<ul>
							{item[lang].list.map((itemList, index) => {
								return <li key={`${item.id}_${index}`}>{itemList}</li>
							})}
						</ul>
					}
				</div>
			</div>

}

export default TimelineEntry;