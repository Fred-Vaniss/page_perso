import React, { Component } from 'react'
import { TimelineEntry, TimelineList } from '../'

export default class Timeline extends Component {
	render() {
		const listTimeline = TimelineList.map(item => {
			return(
				<TimelineEntry
					item={item}
				/>
			)
		})

		return (
			<section class="experience">
				<h2>Parcours</h2>
				<div class="timeline">
					{listTimeline}
				</div>
			</section>
		)
	}
}

