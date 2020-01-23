import React, { Component } from 'react'

export default class About extends Component {
	render() {
		return (
			<section id="about">
				<div className="wrapper">
					<h2>À propos de moi</h2>
					<div className="about-text" data-aos="fade-up">
						<p>J’ai commencé ma carrière en tant qu’infographiste où j’ai touché un peu tous les différents outils: retouche photo, web, animation, sonorisation, 3D, etc. </p>

						<p>N'ayant que la base de tout, il m'a fallu faire un choix: où me spécialiser? J'ai donc décidé de suivre la voie du développement web ou j'ai d'abord suivi des cours en ligne en autodidacte avant de suivre des formations dans le web.</p>

						<p>J'ai d'abord commencé dans l'UX Webdesign, j'ai appris à concevoir des sites accessibles et de les développer en sites statiques. J'ai constaté que j'ai pris beaucoup plus de plaisir à les coder plutôt que de les concevoir, alors j'ai décider de me spécialiser encore plus dans le code où j'ai appris beaucoup plus de choses en code et à surtout découvrir le back-end.</p>

						<p>Depuis, j'ai développé une vraie passion pour la programmation, j'adore chipoter un peu partout, trouver des solutions et résoudre des problèmes.</p>
					</div>
				</div>
			</section>
		)
	}
}
