import React from 'react'
import {LocAbout} from './Localization'

const About = props => {

	return (
		<section id="about">
			<div className="wrapper">
				{LocAbout[props.lang]}
			</div>
		</section>
	)
	
}

export default About;