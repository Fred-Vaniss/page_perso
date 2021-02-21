import React from 'react';

const Gallery = props =>{
	const { src } = props
	const galID = Math.floor(Math.random()*99999);
	const galMap = src.map((item, index) => {
		let thumb = `assets/img/portfolio/gallery/${item.img}-thumb.jpg`
		let href =`assets/img/portfolio/gallery/${item.img}.${item.format}`
		return(
			<div className="modal-image-container" key={index}>
				<a href={href} title={item.alt} data-lightbox={'gallery-'+galID} data-title={item.alt}>
					<img src={thumb} alt={item.alt} key={index}/>
				</a>
				<p>{item.alt}</p>
			</div>
		)
	})
	return(
		<>
			<div className="modal-gallery">
				{ galMap }
			</div>
		</>
	)
}

export const PortfolioList = [
	{
		title: {
			fr: "Addons Gmod",
			en: "Gmod addons"
		},
		techno: "LUA",
		img: "gmod",
		url: {
			note: {
				fr: <>
						<h3>Addons pour Garry's mod</h3>
						<h4>Projet personnel</h4>
						<ul>
							<li>2020 - 2021</li>
							<li>Technologies utilisés: LUA</li>
						</ul>
						<p>Lors de mon temps libre, je développe des addons pour Garry's Mod. C'est à la fois un jeu vidéo et un outil artistique qui est hautement modulable grâce à la possibilité d'implémenter des scripts codés en LUA dans le jeu.</p>
						<p>Les créations peuvent être publiés sur le Steam Workshop où tous le monde peuvent installer les addons créés.</p>
						<h3>SYNTHETIK HUD</h3>
						<h4>Interface de jeu animé</h4>
						<Gallery src={[
							{format: "gif", img: "synthud-1", alt:"Animation barre de vie"},
							{format: "gif", img: "synthud-2", alt:"Animation du compteur de munitions"},
							{format: "jpg", img: "synthud-3", alt:"La communauté Steam a adoré mon addon"}
						]}/>
						<p>Mon projet qui a connu un grand succès sur le Steam Workshop est un addon d'interface de jeu qui reprend d'un jeu vidéo du nom de SYNTHETIK.</p>
						<p>C'est une interface qui est minimaliste et qui est animé fidèlement.</p>
						<hr></hr>
						<h3>FPV Drone</h3>
						<h4>Drone FPV pilotable</h4>
						<p>Mon hobby dans la vie réel est le pilotage de drone FPV. C'est un drone où il n'y a pas d'assistance de stabilisation, on peut tourner dans tous les axes et on porte un masque dans les yeux pour voir ce que le drone voit.</p>
						<p>J'ai développé cet addon qui reproduit à peu près le pilotage d'un vrai drone FPV et où on peut s'amuser dans d'innombrable cartes créé par la communauté Garry's Mod.</p>
						<p>Ce fut aussi ma toute première entitée programmée qui fallait à la fois gérer le coté client et le coté serveur de cet addon.</p>
						<div className="modal-gallery">
							<div className="video-wrapper">
								<iframe width="560" 
										height="315" 
										src="https://www.youtube.com/embed/5zpn2cg4Jq8" 
										frameborder="0" 
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
										allowfullscreen="allowfullscreen"></iframe>
							</div>
						</div>
					</>
			}
		}
	},
	{
		title: {
			fr: "Fiche personnage",
			en: "Character sheet"
		},
		techno: "ReactJS, SASS",
		img: "dnd",
		url: {
			note: {
				fr: <>
						<h3>Fiche de personnage Donjons & Dragons</h3>
						<h4>Projet personnel</h4>
						<ul>
							<li>Mars 2020</li>
							<li>Technologies utilisés: ReactJS, SASS</li>
							<li>Projet en cours de développement</li>
						</ul>
						<Gallery src={[
							{format: "jpg", img: "dnd-1", alt:"Fiche de personnage"},
							{format: "jpg", img: "dnd-2", alt:"Classe d'armure"},
							{format: "jpg", img: "dnd-3", alt:"Jets de sauvegardes"}
						]}/>
						<p>Je participe avec un groupe d'amis à un jeu de rôle sur table Donjon & Dragons. Dans ce jeu, chacun à une fiche de son personnage sous format papier où est indiqué tous les informations sur son personnage.</p>
						<p>Je me suis donc lancé l'idée de faire cette fiche de personnage sous format page web. Non seulement elle sera au format numérique mais en plus il fera les calculs automatiquement avec les différents statistiques associés.</p>
						<p>Pour simplifier le partage de nos fiches de personnage, toutes les modifications apportés sont enregistrés dans l'URL en tant que paramètre.</p>
					</>,
				en: <>
						<h3>Dungeon & Dragons character sheet</h3>
						<h4>Personal project</h4>
						<ul>
							<li>March 2020</li>
							<li>Used technologies: ReactJS, SASS </li>
							<li>Project under development</li>
						</ul>
						<Gallery src={[
							{format: "jpg", img: "dnd-1", alt:"Character sheet"},
							{format: "jpg", img: "dnd-2", alt:"Armor class"},
							{format: "jpg", img: "dnd-3", alt:"Save throws"}
						]}/>
						<p>I'm participating with a group of friends in a Dungeons & Dragons tabletop role-playing game. In this game, each person has its own character sheet in paper where all the information about their characters is indicated.</p>
						<p>So I came up with the idea of making this character sheet in web format. Not only will it be in digital format, but it will also do the calculations automatically with the different associated statistics.</p>
						<p>To simplify the sharing of our character sheets, all changes made are saved in the URL as parameters.</p>
					</>
			},
			preview: "https://fred-vaniss.be/dnd-sheet/"
		}
	},
	{
		title: "Shoebiz & Latino",
		techno: "PrestaShop, JS",
		img: "shoebiz",
		url: {
			note: {
				fr: <>
					<h3>Shoebiz & Latino Mode</h3>
					<h4>Réalisé chez ADEVO Solutions</h4>
					<ul>
						<li>Janvier 2020</li>
						<li>Technologies utilisés: PrestaShop, PHP, JavaScript</li>
						<li>Projet partiellement réalisé en un mois</li>
					</ul>
					<Gallery src={[
						{format: "jpg", img: "shoe-1", alt:"Section d'accueil du site"},
						{format: "jpg", img: "shoe-2", alt:"Bannière de catégorie ajouté manuellement"},
						{format: "jpg", img: "shoe-3", alt:"Fiche d'un produit"}
					]}/>
					<p>J'ai commencé ce projet lors du dernier mois de mon stage chez ADEVO, je n'ai pu faire ce projet que partiellement.</p>
					<p>Ce projet consistait à faire un site boutique pour Shoebiz & Latino Mode qui vends des chaussures et vêtements pour femme de haut de gamme. Ce projet n'étant pas du sur-mesure, on s'est principalement basé sur un thème PrestaShop avec des modifications moins important que Heliostart</p>
					<p>PrestaShop était une totale découverte pour moi quand j'ai commencé ce projet. Il m'a fallu beaucoup chercher et documenter pour trouver comment modifier le Site. Contrairement à Wordpress, il faut beaucoup plus modifier les fichiers du thème pour modifier la mise en page comme je veut.</p>
					<p>J'ai dû beaucoup modifier les scripts des modules, surtout pour transformer le menu responsive sous forme de menu déroulant du haut de la page en menu qui se glisse latéralement.</p>
					<p>J'ai pu faire toutes les modifications que l'on m'a demandées pour faire une première présentation du site à notre client. C'était désormais à lui de faire les photos et de fournir le futur contenu pour faire la suite du site web.</p>
					<p>Mon stage touchant à sa fin, je n'ai pas pu faire la suite du projet, mais c'était une très bonne avancée pour le site.</p>
				</>,
				en: <>
					<h3>Shoebiz & Latino Mode</h3>
					<h4>Made at Adevo Solutions</h4>
					<ul>
						<li>January 2020</li>
						<li>Used technologies: PrestaShop, PHP, JavaScript</li>
						<li>Project partially completed in one month</li>
					</ul>
					<Gallery src={[
						{format: "jpg", img: "shoe-1", alt:"Home section of the website"},
						{format: "jpg", img: "shoe-2", alt:"Manually added category banner"},
						{format: "jpg", img: "shoe-3", alt:"Product sheet"}
					]}/>
					<p>I started this project during the last month of my internship at ADEVO, so I was able to do this project only partially.</p>
					<p>This project consisted of creating a web shop for Shoebiz & Latino Mode that sells high-end women's shoes and clothing. Since this project was not customized, it was mainly based on a PrestaShop theme with minor changes compared to Heliostart</p>
					<p>PrestaShop was a total discovery for me when I started this project. It took me a lot of research and documentation to find out how to edit the website. Unlike WordPress, it takes much more edits on the theme's files in order to edit the layout as I want.</p>
					<p>I had to modify the scripts of the modules a lot, especially to transform the responsive menu from a top-down menu to a side-sliding menu.</p>
					<p>I was able to make all the modification I was asked to in order to show a first presentation of the website to our client. It was now up to him to take the photos and provide the future content to make the rest of the website.</p>
					<p>As my internship was coming to an end, I was unable to continue the project, but it was a very good step forward for the website.</p>
				</>
			},
		}
	},
	{
		title: "Isotrim",
		techno: "Wordpress, JS",
		img: "isotrim",
		url: {
			note: {
				fr: <>
						<h3>Isotrim</h3>
						<h4>Réalisé chez ADEVO Solutions</h4>
						<ul>
							<li>Janvier 2020</li>
							<li>Technologies utilisés: Wordpress, PHP, JavaScript</li>
							<li>Projet auquel j'ai participé au développement</li>
						</ul>
						<Gallery src={[
							{format: "jpg", img: "iso-1", alt: "Section ligne du temps modifié"},
							{format: "jpg", img: "iso-2", alt: "Panneau latérale que j'ai créé"},
							{format: "jpg", img: "iso-3", alt:"Section d'accueil que j'ai adapté en responsive"}
						]}/>
						<p>Contrairement à Heliostart, ceci est un projet auquel j'ai apporté mon soutien, j'ai principalement apporté des modifications et de nouvelles fonctionnalités au site.</p>
						<p>En effet, j'ai créé un nouveau module pour le site qui est le panneau latéral, je l'ai créée de toute pièce, on peut y insérer les modules qu'on veut. Ainsi il sert de petit formulaire pour que le client puisse se faire appeler par l'entreprise dans la tranche horaire qu'il veut.</p>
						<p>Une autre modification que j'ai apportée est celle de la ligne de temps dans la page <span className="italic">à propos</span>. De base il avait juste les boutons sur la gauche, j'ai modifié son fonctionnement pour qu'il défile tout seul jusqu'à ce qu'on interagisse avec et ajouté deux boutons sur les côtés pour passer au slide suivant et précédent.</p>
						<p>Et la dernière modification que j'ai apportée au site est l'intégration d'un aperçu d'image <span className="italic">lightbox</span> dans le site pour les pages <span className="italic">nos services</span> et <span className="italic">nos réalisations</span></p>
					</>,
				en: <>
						<h3>Isotrim</h3>
						<h4>Made at ADEVO Solutions</h4>
						<ul>
							<li>January 2020</li>
							<li>Used technologies: Wordpress, PHP, JavaScript</li>
							<li>Project that I've participated</li>
						</ul>
						<Gallery src={[
							{format: "jpg", img: "iso-1", alt: "Modified timeline section"},
							{format: "jpg", img: "iso-2", alt: "Sidebar I've made"},
							{format: "jpg", img: "iso-3", alt:"Reworked home section that I've adapted to responsive"}
						]}/>
						<p>Unlike Heliostart, this was a project that I have supported, I mainly made changes and new features to the website.</p>
						<p>Indeed, I created a new module for the website, which is the side panel, I created it from scratch, we can insert the modules we want. Thus it serves as a small form so that the customer can be called by the company in the time slot he wants.</p>
						<p>Another change I made is the timeline in the page <span className="italic">about</span>. Before it had just the buttons on the left, I modified it to make it scroll by itself until you interact with it and added two buttons on the sides to go to the next and previous slide.</p>
						<p>And the last modification I made to the website is the integration of a <span className="italic">lightbox</span> image preview in the website for the pages <span className="italic">our services</span> and <span className="italic"> our realizations</span>.</p>
				</>
			},
		}
	},
	{
		title: "Heliostart",
		techno: "Wordpress, JS",
		img: "heliostart",
		url: {
			note: {
				fr: <>
						<h3>Heliostart</h3>
						<h4>Réalisé chez ADEVO Solutions</h4>
						<ul>
							<li>Novembre 2019</li>
							<li>Technologies utilisés: Wordpress, PHP, JavaScript</li>
							<li>Durée du projet: 2 mois</li>
						</ul>
						<Gallery src={[
							{format: "jpg", img: "helio-1", alt: "Page d'accueil"},
							{format: "jpg", img: "helio-2", alt: "Section boutique"},
							{format: "jpg", img: "helio-3", alt: "Section de présentation du produit"}
						]}/>
						<p>Mon premier projet de stage chez ADEVO Solutions consiste à concevoir et à construire un site internet pour promouvoir et vendre un produit et des services Heliostart. C'est un boîtier permettant d'automatiser le fonctionnement d'un banc solaire à l'aide d'une application Android, il propose également des services de création de sites web.</p>
						<p>Le projet s'est basé d'un thème Wordpress. Le site étant sur-mesure, il a fallu beaucoup modifier dans le CSS et pas mal d'éléments ont étés construite en HTML brut.</p>
						<p>J'ai du aussi mettre en application mes talents de graphiste et de Webdesigner, j'avais à disposition une maquette de ce que devrais ressembler le site, mais il m'a fallu créer pas mal d'éléments graphiques pour le site, tel que le logo, le fond de la page d'accueil, les pictogrammes, et ainsi de suite.</p>
						<p>La partie qui m'a demandé le plus de travail est sans doute la page commander, pour cette partie j'ai du créer un shortcode PHP pour que les prix soient à jour par rapport aux données entrées dans les articles WooCommerce, puis il m'a fallu faire du JavaScript pour faire le calcul et l'affichage du récapitulatif en fonction des articles sélectionnés. Et pour que les articles s'ajoutent correctement dans le panier, je me suis aussi servi de JavaScript pour que le lien de commande se mette à jour pour mettre les articles sélectionnés au panier.</p>
					</>,
				en: <>
						<h3>Heliostart</h3>
						<h4>Made at ADEVO Solutions</h4>
						<ul>
							<li>November 2019</li>
							<li>Used technologies: Wordpress, PHP, JavaScript</li>
							<li>Project duration: 2 months</li>
						</ul>
						<Gallery src={[
							{format: "jpg", img: "helio-1", alt: "Homepage"},
							{format: "jpg", img: "helio-2", alt: "Shop section"},
							{format: "jpg", img: "helio-3", alt: "Product presentation section"}
						]}/>
						<p>My first internship project at ADEVO Solutions is to design and build a website to promote and sell a Heliostart product and services. It is a box that allows to automating the operation of a sunbed using an Android application, it also offers website creation services.</p>
						<p>The project was based on a WordPress theme. The site being customized, it was necessary to modify the CSS a lot and a lot of elements were built in raw HTML</p>
						<p>I also had to apply my graphic and web designer skills. I had a mock-up of what the website should look like, but I had to create a lot of graphic elements for the website, such as the logo, the background of the homepage, the pictograms and so on.</p>
						<p>The part that required the most of the work is certainly the order page, for this part I had to create a PHP shortcode so that the prices are up to date with the data entered in WooCommerce articles, then I had to use JavaScript to do the calculation and display the summary according to the selected articles. And in order to add the items correctly to the cart, I also used JavaScript to update the order links to put in the select items in the cart.</p>
					</>
			},
			preview: "https://www.heliostart.com"
		}
	},
	{
		title: {
			fr: "Ce site web",
			en: "This website"
		},
		techno: "ReactJS, SASS",
		img: "fred",
		url: {
			git: "https://github.com/Fred-Vaniss/page_perso"
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
		title: "Todolist",
		techno: "ReactJS",
		img: "todo",
		url: {
			git: "https://github.com/Fred-Vaniss/react-todo-list",
			preview: "https://todolist-fred-vaniss.netlify.com/"
		}
	},
	{
		title: {
			fr: "Jeu du pendu",
			en: "Hangman's game"
		},
		techno: "JavaScript",
		img: "pendu",
		url: {
			git: "https://github.com/Fred-Vaniss/jeu-pendu",
			preview: "https://fred-vaniss.github.io/jeu-pendu/"
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
	}
]