import React from 'react';

const Img = props =>{
	const { src } = props
	const galID = Math.floor(Math.random()*99999);
	const img = src.map((item, index) => {
		let thumb = require(`./img/portfolio/${item.img}-thumb.jpg`)
		let image = require(`./img/portfolio/${item.img}.jpg`)
		return(
			<div className="modal-image-container" key={index}>
				<a href={image} data-lightbox={'gallery-'+galID} title={item.alt} data-title={item.alt}>
					<img src={thumb} alt={item.alt} key={index}/>
				</a>
				<p>{item.alt}</p>
			</div>
		)
	})
	return(
		<>
			<div className="modal-gallery">
				{ img }
			</div>
		</>
	)
}

export const PortfolioList = [
	{
		title: "Artifact Rush",
		techno: "HTML, SASS, JavaScript",
		img: "artifact",
		url: {
			// note:	<>
			// 			<h3>Artifact Rush</h3>
			// 			<h4>Projet de fin d'étude de bachelier</h4>
			// 			<ul>
			// 				<li>Janvier 2019</li>
			// 				<li>Technos: HTML, SASS, JavaScript</li>
			// 				<li>Durée du projet: 2 mois</li>
			// 			</ul>
			// 			<Img src={[
			// 				{img: "artifact-1", alt: "Section d'accueil"},
			// 				{img: "artifact-2", alt: "Section portfolio"},
			// 				{img: "artifact-3", alt: "Détail d'un article dans un modal"}
			// 			]}/>
			// 			<p>Je me suis lancé sur ce projet de recréation de ce site pour mettre en application ce que j'avais appris en UX Webdesign chez Technocité.</p>
			// 			<p>C'est une refonte de <a href="https://speedy-vongofast.github.io/artifact-rush-website/" target="_blank" rel="noopener noreferrer nofollow">mon site de projet de fin d'études (créé en 2017)</a> qui à la base était juste un thème Bootstrap que j'avais tout simplement modifié, je n'avais quasi aucune connaissance dans le développement web à cette époque.</p>
			// 			<p>Cette refonte n'a pas Bootstrap et toutes les fonctionnalités du site sont faites en JavaScript pur. J'ai également fait des améliorations sur la mise en page et elle est parfaitement responsive.</p>
						
			// 		</>,
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
							<li>Novembre 2019</li>
							<li>Technologies utilisés: Wordpress, PHP, JavaScript</li>
							<li>Durée du projet: 2 mois</li>
						</ul>
						<Img src={[
							{img: "helio-1", alt: "Page d'accueil"},
							{img: "helio-2", alt: "Section boutique"},
							{img: "helio-3", alt: "Section de présentation du produit"}
						]}/>
						<p>Mon premier projet de stage chez ADEVO Solutions consiste à concevoir et à construire un site internet pour promouvoir et vendre un produit et des services Heliostart. C'est un boîtier permettant d'automatiser le fonctionnement d'un banc solaire à l'aide d'une application Android, il propose également des services de création de sites web.</p>
						<p>Le projet s'est basé d'un thème Wordpress. Le site étant sur-mesure, il a fallu beaucoup modifier dans le CSS et pas mal d'éléments ont étés construite en HTML brut.</p>
						<p>J'ai du aussi mettre en application mes talents de graphiste et de Webdesigner, j'avais à disposition une maquette de ce que devrais ressembler le site, mais il m'a fallu créer pas mal d'éléments graphiques pour le site, tel que le logo, le fond de la page d'accueil, les pictogrammes, et ainsi de suite.</p>
						<p>La partie qui m'a demandé le plus de travail est sans doute la page commander, pour cette partie j'ai du créer un shortcode PHP pour que les prix soient à jour par rapport aux données entrées dans les articles WooCommerce, puis il m'a fallu faire du JavaScript pour faire le calcul et l'affichage du récapitulatif en fonction des articles sélectionnés. Et pour que les articles s'ajoutent correctement dans le panier, je me suis aussi servi de JavaScript pour que le lien de commande se mette à jour pour mettre les articles sélectionnés au panier.</p>
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
							<li>Janvier 2020</li>
							<li>Technologies utilisés: Wordpress, PHP, JavaScript</li>
							<li>Projet auquel j'ai participé au développement</li>
						</ul>
						<Img src={[
							{img: "iso-1", alt: "Section ligne du temps modifié"},
							{img: "iso-2", alt: "Panneau latérale que j'ai créé"},
							{img: "iso-3", alt:"Section d'accueil que j'ai adapté en responsive"}
						]}/>
						<p>Contrairement à Heliostart, ceci est un projet auquel j'ai apporté mon soutien, j'ai principalement apporté des modifications et de nouvelles fonctionnalités au site.</p>
						<p>En effet, j'ai créé un nouveau module pour le site qui est le panneau latéral, je l'ai créée de toute pièce, on peut y insérer les modules qu'on veut. Ainsi il sert de petit formulaire pour que le client puisse se faire appeler par l'entreprise dans la tranche horaire qu'il veut.</p>
						<p>Une autre modification que j'ai apportée est celle de la ligne de temps dans la page <span className="italic">à propos</span>. De base il avait juste les boutons sur la gauche, j'ai modifié son fonctionnement pour qu'il défile tout seul jusqu'à ce qu'on interagisse avec et ajouté deux boutons sur les côtés pour passer au slide suivant et précédent.</p>
						<p>Et la dernière modification que j'ai apportée au site est l'intégration d'un aperçu d'image <span className="italic">lightbox</span> dans le site pour les pages <span className="italic">nos services</span> et <span className="italic">nos réalisations</span></p>
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
							<li>Janvier 2020</li>
							<li>Technologies utilisés: PrestaShop, PHP, JavaScript</li>
							<li>Projet partiellement réalisé en un mois</li>
						</ul>
						<Img src={[
							{img: "shoe-1", alt:"Section d'accueil du site"},
							{img: "shoe-2", alt:"Bannière de catégorie ajouté manuellement"},
							{img: "shoe-3", alt:"Fiche d'un produit"}
						]}/>
						<p>J'ai commencé ce projet lors du dernier mois de mon stage chez ADEVO, je n'ai pu faire ce projet que partiellement.</p>
						<p>Ce projet consistait à faire un site boutique pour Shoebiz & Latino Mode qui vends des chaussures et vêtements pour femme de haut de gamme. Ce projet n'étant pas du sur-mesure, on s'est principalement basé sur un thème PrestaShop avec des modifications moins important que Heliostart</p>
						<p>PrestaShop était une totale découverte pour moi quand j'ai commencé ce projet. Il m'a fallu beaucoup chercher et documenter pour trouver comment modifier le Site. Contrairement à Wordpress, il faut beaucoup plus modifier les fichiers du thème pour modifier la mise en page comme on veut.</p>
						<p>J'ai dû beaucoup modifier les scripts des modules, surtout pour transformer le menu responsive sous forme de menu déroulant du haut de la page en menu qui se glisse latéralement.</p>
						<p>J'ai pu faire toutes les modifications que l'on m'a demandées pour faire une première présentation du site à notre client. C'était désormais à lui de faire les photos et de fournir le futur contenu pour faire la suite du site web.</p>
						<p>Mon stage touchant à sa fin, je n'ai pas pu faire la suite du projet, mais c'était une très bonne avancée pour le site.</p>
					</>,
			preview: "http://shoebiz.adevo.be"
		}
	}
]