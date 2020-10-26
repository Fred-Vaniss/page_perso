import React from 'react'
import { SkillEntry, SkillsList } from '..'
import {LocSkills} from '../Localization'

const Skills = props => {
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
				{LocSkills[props.lang]}
				<div className="skills-flex">
					{ listSkills }
				</div>
			</div>
		</section>
	)
}

export default Skills;