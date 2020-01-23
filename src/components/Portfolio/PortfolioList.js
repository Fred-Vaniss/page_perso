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
						<h4>Réalisé chez ADEVO Solutions</h4>
						<ul>
							<li>Technologies utilisés: Wordpress, PHP, JavaScript</li>
							<li>Durée du projet: 2 mois</li>
						</ul>
						<p>Mon premier projet de stage chez ADEVO Solutions consiste à concevoir et à construire un site internet pour promouvoir et vendre un produit et services Heliostart. C'est un boitier permettant d'automatiser le fonctionnement d'un banc solaire à l'aide d'une application Android, il propose également des services de création de site web.</p>
						<p>Le projet s'est basé d'un thème Wordpress. Le site étant sur-mesure, il a fallu beaucoup modifier dans le CSS et pas mal d'élément ont étés construite en HTML brut.</p>
						<p>J'ai du aussi mettre en application mes talents de graphiste et de Webdesigner, j'avais à disposition une maquette de ce que devrais ressembler le site mais il m'a fallu créer pas mal d'éléments graphique pour le site, tel que le logo, le fond de la page d'accueil, les pictogrammes, et ainsi de suite.</p>
						<p>La partie qui m'a demandé le plus de travail est sans doute la page commander, pour cette partie j'ai du créer un shortcode PHP pour que les prix soient à jour par rapport aux données entrés dans les articles WooCommerce, puis il m'a fallu faire du JavaScript pour faire le calcul et l'affichage du récapitulatif en fonction des articles sélectionnés. Et pour que les articles s'ajoutent correctement dans le panier, je me suis aussi servi de JavaScript pour que le lien de commande se mette à jour pour mettre les articles sélectionnés au panier.</p>
					</>,
			preview: "http://heliostart.adevo.be"
		}
	},
	{
		title: "Isotrim",
		techno: "Wordpress, JS",
		img: "isotrim",
		url: {
			note: 	<>
						<h3>Isotrim</h3>
						<h4>Réalisé chez ADEVO Solutions</h4>
						<ul>
							<li>Technologies utilisés: Wordpress, PHP, JavaScript</li>
							<li>Projet auquel j'ai participé au développement</li>
						</ul>
						<p>Contrairement à Heliostart, ceci est un projet auquel j'ai apporté mon soutien, j'ai principalement apporté des modifications et de nouvelles fonctionnalités au site.</p>
						<p>En effet, j'ai créé un nouveau module pour le site qui est le panneau latéral, je l'ai créé de toute pièce et on peut y insérer les modules qu'on veut. Ainsi il sert de petit formulaire pour que le client puisse se faire appeler par l'entreprise dans la tranche horaire qu'il veut.</p>
						<p>Une autre modification que j'ai apporté est celui de la ligne de temps dans la page <span className="italic">à propos</span>. De base il avait juste les bouttons sur la gauche, j'ai modifié son fonctionnement pour qu'il défile tout seule jusqu'à ce qu'on interagisse avec et ajouté deux boutons sur les côtés pour passer au slide suivant et précédent.</p>
						<p>Et la dernière modification que j'ai apporté au site est l'intégration d'un aperçu d'image <span className="italic">lightbox</span> dans le site pour les pages <span className="italic">nos services</span> et <span className="italic">nos réalisations</span></p>
					</>,
			preview: "http://isotrim.adevo.be"
		}
	},
	{
		title: "Shoebiz & Latino",
		techno: "PrestaShop, JS",
		img: "shoebiz",
		url: {
			note:	<>
						<h3>Shoebiz & Latino Mode</h3>
						<h4>Réalisé chez ADEVO Solutions</h4>
						<ul>
							<li>Technologies utilisés: PrestaShop, PHP, JavaScript</li>
							<li>Projet partiellement réalisé en un mois</li>
						</ul>
						<p>J'ai commencé ce projet lors du dernier mois de mon stage chez ADEVO, je n'ai pu faire ce projet que partiellement.</p>
						<p>Ce projet consistait à faire un site boutique pour Shoebiz & Latino Mode qui vends des chaussures et vêtements pour femme de haute gamme. Ce projet n'étant pas du sur-mesure, on s'est principalement basé sur un thème PrestaShop avec des modifications moins importants que Heliostart</p>
						<p>PrestaShop était une total découverte pour moi quand j'ai commencé ce projet. Il m'a fallu beaucoup chercher et documenter pour trouver comment modifier le Site. Contrairement à Wordpress, il faut beaucoup plus modifier les fichiers du thème pour modifier la mise en page comme on veut.</p>
						<p>J'ai du beaucoup modifier les scripts des module, surtout pour transformer le menu responsive sous forme de menu déroulant du haut de la page en menu qui se glisse latéralement.</p>
						<p>J'ai pu faire toutes les modifications que l'on m'a demandé pour faire une première présentation du site à notre client. Il était satisfait et c'était désormais à lui de faire les photos et de fournir le futur contenu pour faire la suite du site web. </p>
						<p>Mon stage touchant à sa fin, je n'ai pas pu faire la suite du projet mais c'était une très bonne avancée pour le site.</p>
					</>,
			preview: "http://shoebiz.adevo.be"
		}
	}
]