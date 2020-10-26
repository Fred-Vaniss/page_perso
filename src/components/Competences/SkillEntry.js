import React, { Component } from 'react'
import { SubSkillEntry } from '.'

export default class SkillEntry extends Component {

	render() {
		const { item, delay } = this.props

		const img = `assets/img/competences/${item.icon}.svg`

		return (
			<div className="skill-entry" data-aos="zoom-in" data-aos-delay={delay} data-aos-anchor="#skills"> 	
				<img src={img} alt={item.title} className="skill-icon"/>
				<div className="skill-tooltip-bloc">
					<span className="skill-tooltip">{item.title}</span>
				</div>
				{item.subskills && 
					<div className="sub-skills">
						{item.subskills.map((item, index = 0) => {
							index++
							return <SubSkillEntry
										item={item}
										key={index}
									/>
						})}
						
					</div>
				}
			</div>
		)
	}
}
