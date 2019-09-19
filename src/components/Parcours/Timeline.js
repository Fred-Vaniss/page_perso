import React, { Component } from 'react'
import { TimelineEntry, TimelineList } from '../'

export default class Timeline extends Component {
	render() {
		const listTimeline = TimelineList.map(item => {
			return(
				<TimelineEntry
					item={item}
					key={item.id}
				/>
			)
		})

		return (
			<section className="experience">
				<h2>Parcours</h2>
				<div className="timeline">
					{listTimeline}
				</div>
			</section>
		)
	}
}

