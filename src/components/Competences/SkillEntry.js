import React, { Component } from 'react'
import { SubSkillEntry } from '.'

export default class SkillEntry extends Component {

	render() {
		const { item } = this.props

		const img = require(`./img/${item.icon}.svg`)

		return (
			<div className="skill-entry"> 	
				<img src={img} alt={item.title} title={item.title} className="skill-icon"/>
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
