import React from 'react'
import { TimelineEntry, TimelineList } from '../'
import {LocCareer} from '../Localization'

const Timeline = props => {

	const listTimeline = TimelineList.map((item, index = 0) => {
		index++
		return(
			<TimelineEntry
				item={item}
				key={index}
				lang={props.lang}
			/>
		)
	})

	return (
		<section id="experience">
			<div className="wrapper">
				{LocCareer[props.lang]}
				<div className="timeline">
					{listTimeline}
				</div>
			</div>
		</section>
	)

}

export default Timeline;