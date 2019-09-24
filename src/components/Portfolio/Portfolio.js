import React, { Component } from 'react'
import { PortfolioList, PortfolioEntry } from './'

export default class Portfolio extends Component {

	render() {
		const listPortfolio = PortfolioList.map((item, index = 0) => {
			index++
			return(
				<PortfolioEntry
					item={item}
					key={index}
				/>
			)
		})

		return (
			<section className="portfolio">
				<div className="wrapper">
					<h2>Mon portfolio</h2>
					<div class="portfolio-list">
						{ listPortfolio }
					</div>
				</div>
			</section>
		)
	}
}
