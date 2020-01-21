import React from 'react';

export const PortfolioList = [
	{
		title: "Artifact Rush",
		techno: "HTML, SASS, JavaScript",
		img: "artifact",
		url: {
			git: "https://github.com/Fred-Vaniss/artifact-rush-website",
			preview: "https://fred-vaniss.github.io/artifact-rush-website/"
		}
	},
	{
		title: "Mel'égumes",
		techno: "HTML, SASS, JavaScript",
		img: "mel",
		url: {
			git: "https://github.com/Fred-Vaniss/site-mel-egumes",
			preview: "https://fred-vaniss.github.io/site-mel-egumes/"
		}
	},
	{
		title: "Jeu du pendu",
		techno: "JavaScript",
		img: "pendu",
		url: {
			git: "https://github.com/Fred-Vaniss/jeu-pendu",
			preview: "https://fred-vaniss.github.io/jeu-pendu/"
		}
	},
	{
		title: "Todolist",
		techno: "ReactJS",
		img: "todo",
		url: {
			git: "https://github.com/Fred-Vaniss/react-todo-list",
			preview: "https://todolist-fred-vaniss.netlify.com/"
		}
	},
	{
		title: "AllezCiné",
		techno: "HTML, CSS, Javascript",
		img: "cine",
		url: {
			git: "https://github.com/Fred-Vaniss/site-allezcine",
			preview: "https://fred-vaniss.github.io/site-allezcine/",
		}
	},
	{
		title: "Ce site web",
		techno: "ReactJS, SASS",
		img: "fred",
		url: {
			git: "https://github.com/Fred-Vaniss/page_perso"
		}
	},
	{
		title: "Heliostart",
		techno: "Wordpress, JS",
		img: "heliostart",
		url: {
			note: 	<>
						<h3>Heliostart</h3>
						<ul>
							<li>Entreprise: ADEVO Solutions</li>
							<li>Technologies utilisés: Wordpress, PHP, JavaScript</li>
							<li>Durée du projet: 2 mois</li>
						</ul>
						<p>Mon premier projet de stage chez ADEVO Solutions consiste à concevoir et à construire un site internet pour promouvoir et vendre un produit et services Heliostart. C'est un boitier permettant d'automatiser le fonctionnement d'un banc solaire à l'aide d'une application Android, il propose également des services de création de site web.</p>
						<p>Le projet s'est basé d'un thème Wordpress, le site étant sur-mesure, il a fallu beaucoup modifier dans le CSS et pas mal d'élément ont étés construite en HTML brut.</p>
						<p>J'ai du aussi mettre mes talents de graphiste et de webdesigner à contribution pour ce qui est création des éléments graphiques du site.</p>
						<p>La partie qui m'a demandé le plus de travail est sans doute la page commander, pour cette partie j'ai du créer un shortcode PHP pour que les prix soient à jour par rapport aux données entrés dans les particles WooCommerce, puis en fonction des articles sélectionnés il faut aussi qu'ils s'ajoutent correctement dans le panier. Il m'a fallu donc recourir au JavaScript pour que le lien HTML se mettre à jour en fonction de ce qui à été coché.</p>
					</>,
			preview: "http://heliostart.adevo.be"
		}
	}
]