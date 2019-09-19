import React, { Component } from 'react'

export default class SkillEntry extends Component {
	render() {
		const { item } = this.props		
		return (
			<div className="skill-entry">
				<p>{item.title}</p>
			</div>
		)
	}
}
