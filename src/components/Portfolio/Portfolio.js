import React, {useState} from 'react'
import { PortfolioList, PortfolioEntry } from './'
import {LocPortfolio} from '../Localization'

const Portfolio = props => {

	const [modal, setModal] = useState(null)

	const listPortfolio = PortfolioList.map((item, index = 0) => {
		let animDelay = 100 * index;
		return(
			<PortfolioEntry
				item={item}
				animDelay={animDelay}
				key={index}
				lang={props.lang}
				open={modal}
				setOpen={setModal}
				index={index}
			/>
		)
	})

	return (
		<section id="portfolio">
			<div className="wrapper" id="portfolio-animate-trigger">
				{LocPortfolio[props.lang]}
				<div className="portfolio-list">
					{ listPortfolio }
				</div>
			</div>
		</section>
	)

}

export default Portfolio;