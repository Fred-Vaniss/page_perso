import React, { Component } from 'react'
import { TimelineEntry, TimelineList } from '../'

export default class Timeline extends Component {
	render() {
		const listTimeline = TimelineList.map((item, index = 0) => {
			index++
			return(
				<TimelineEntry
					item={item}
					key={index}
				/>
			)
		})

		return (
			<section id="experience">
				<div className="wrapper">
					<h2>Parcours</h2>
					<div className="timeline">
						{listTimeline}
					</div>
				</div>
			</section>
		)
	}
}

