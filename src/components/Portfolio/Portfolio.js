import React from 'react'
import { PortfolioList, PortfolioEntry } from './'

const Portfolio = props => {

	const listPortfolio = PortfolioList.map((item, index = 0) => {
		let animDelay = 100 * index;
		return(
			<PortfolioEntry
				item={item}
				animDelay={animDelay}
				key={index}
			/>
		)
	})

	return (
		<section id="portfolio">
			<div className="wrapper" id="portfolio-animate-trigger">
				<h2>Mon portfolio</h2>
				<div className="portfolio-list">
					{ listPortfolio }
				</div>
			</div>
		</section>
	)

}

export default Portfolio;