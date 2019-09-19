import React, { Component } from 'react'
import { SkillEntry, SkillsList } from '..'

export default class Skills extends Component {
	render() {
		const listSkills = SkillsList.map(item => {
			return(
				<SkillEntry
					item={item}
				/>
			)
		})

		return (
			<section className="skills">
				{ listSkills }
			</section>
		)
	}
}
