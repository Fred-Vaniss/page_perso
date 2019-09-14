import React, { Component } from 'react'
import { TimelineEntry } from '../'

export default class Timeline extends Component {
	render() {
		return (
			<section class="experience">
				<h2>Parcours</h2>
				<div class="timeline">
					<TimelineEntry
						type="formation"
						title="Formation développeur web"
						time="avril - octobre 2019"
						entreprise="BeCode"
						place="Charleroi"
						desc="Formation intensive dans le développement front-end et back-end. On a appris différents languages de programmation ainsi que les différents frameworks et réalisé plusieurs travaux de groupe et participation aux évenements tel que les Hackathon, Coder Dojos et autres..."
					/>
					<TimelineEntry
						type="formation"
						title="Formation UX WebDesign"
						time="octobre 2018 - février 2019"
						entreprise="Technocité"
						place="Hornu"
						desc="Formation dans le design et intégration de site web en prenant compte de l’expérience utilisateur."
					/>
				</div>
			</section>
		)
	}
}

