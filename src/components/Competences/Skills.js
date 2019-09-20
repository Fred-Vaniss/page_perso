import React, { Component } from 'react'
import { SkillEntry, SkillsList } from '..'

export default class Skills extends Component {
	render() {
		const listSkills = SkillsList.map((item, index = 0) => {
			index++
			return(
				<SkillEntry
					item={item}
					key={index}
				/>
			)
		})

		return (
			<section className="skills">
				<h2>Mes compétences</h2>
				{ listSkills }
			</section>
		)
	}
}
