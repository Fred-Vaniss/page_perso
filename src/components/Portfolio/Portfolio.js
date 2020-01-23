import React, { Component } from 'react'
import { PortfolioList, PortfolioEntry } from './'

export default class Portfolio extends Component {

	render() {
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
				<div className="wrapper">
					<h2>Mon portfolio</h2>
					<div className="portfolio-list">
						{ listPortfolio }
					</div>
				</div>
			</section>
		)
	}
}
