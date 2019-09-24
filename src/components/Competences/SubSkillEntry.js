import React, { Component } from 'react'

export default class SubCompetence extends Component {
	render() {
		const {item} = this.props;
		const img = require(`./img/${item.icon}.svg`)
		
		return <div className="skill-entry-sub">
			<img src={img} alt={item.title} title={item.title} className="skill-icon-sub"/>
		</div>
		
	}
}