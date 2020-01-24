import React, { Component } from 'react'
import { SkillEntry, SkillsList } from '..'

export default class Skills extends Component {
	render() {
		const listSkills = SkillsList.map((item, index = 0) => {
			let animationDelay = 100 * index
			return(
				<SkillEntry
					item={item}
					delay={animationDelay}
					key={index}
				/>
			)
		})

		return (
			<section id="skills">
				<div className="wrapper">
					<h2>Mes compétences</h2>
					<div className="skills-flex">
						{ listSkills }
					</div>
				</div>
			</section>
		)
	}
}
