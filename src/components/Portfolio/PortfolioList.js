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
			fr: "Suivi d'objectifs",
			en: "Objective tracker"
		},
		techno: "React, SASS",
		img: "bt-tracker",
		url:{
			note: {
				fr: <>
					<h3>Suivir d'objetifs limités dans le temps</h3>
					<h4>Projet personnel</h4>
					<ul>
						<li>Février 2021</li>
						<li>Technologies utilisés: React, SASS</li>
						<li>Projet terminé en deux journées</li>
					</ul>
					<p>Je joue beaucoup aux jeux vidéos et il existe un concept qu'on appelle "Battlepass", ou Pass de Combat. C'est un objectif limité dans le temps (généralement trois mois) où on peut gagner des récompenses supplémentaire.</p>
					<p>Je me suis dis du coup pourquoi ne pas me faire une appli pour avoir un suivi et qui me permettrais de déterminer si je suis dans le temps ou si je suis en retard. C'était aussi le projet idéal pour me remettre dans le bain de React.</p>
					<p>Cet appli permets de créer plusieurs suivis avec une date de début, une date de fin, une heure, un nombre déterminant l'objectif à atteindre et la quantité que les bouttons + et - incrémentent</p>
					<p>Les barres de progressions ont une petite barre de temps qui défile de gauche à droite en fonction du temps restant, c'est ce qui détermine si on est en avance ou en retard par rapport au pourcentage de la progression, c'est un concept que Diablo III m'a inspiré.</p>
					<p>Et pour aller plus loins, j'ai aussi ajouté la possibilité de réorganiser les différents entrées, de les éditer ainsi que de les supprimer.</p>
				</>,
				en: <>
				</>
			},
			git: "https://github.com/Fred-Vaniss/battlepass-tracker",
			preview: "https://fred-vaniss.be/timed-progress-tracker"
		}
	},
	{
		title: {
			fr: "Template Grav",
			en: "Grav template"
		},
		techno: "PHP, Twig",
		img: "grav",
		url:{
			note: {
				fr: <>
					<h3>Test de construction d'un template pour Grav</h3>
					<h4>Projet de test pour Why Agency</h4>
					<ul>
						<li>Février 2021</li>
						<li>Technologies utilisés: PHP, Twig</li>
						<li>Projet terminé en une journée.</li>
					</ul>
					<Gallery src={[
						{format: "jpg", img: "grav/grav-1", alt:"Aperçu du site via la Back-Office"},
						{format: "jpg", img: "grav/grav-2", alt:"Edition du module de services"},
						{format: "jpg", img: "grav/grav-3", alt:"Edition du module de portfolio"},
					]}/>
					<p>Avec Why Agency, on a eu un client qui a eu la particularité de nous demander un site web basé sur un CMS léger et écologique. Nous qui travaillons sur WordPress, on sait qu'il nous faudrait trouver un autre CMS.</p>
					<p>On a approché l'option de Grav, c'est un CMS open source basé sur Symfony, qui est Flat-File et il utilise le Markdown pour les articles et le contenu</p>
					<p>Grav étant un CMS beaucoup moins connu que WordPress, on a du coup beaucoup moins d'options pour des thèmes déjà construits. J'ai donc proposé à l'équipe de tenter l'approche de construire soi-même un thème Grav à partir d'un bête thème HTML statique.</p>
					<p>Je me suis donc lancé sur ce test à partir <a href="https://startbootstrap.com/theme/creative" target="_blank" rel="noopener noreferrer" title="Thème d'origine 'Creative'">d'un thème gratuit Bootstrap "Creative"</a>. Je n'avais absolument aucune expérience sur la construction d'un thème, ni sur le langage Twig. C'était un total découvert pour moi et il m'a fallu beaucoup me renseigner sur la documentation officiele de Grav et observer comment les autres thèmes ont étés construits.</p>
					<p>Avant de me lancer sur la conversion du HTML en thème Twig, j'ai d'abord analysé la structure HTML afin de déterminer comment le découper, quels éléments qui vont être répétés pour afficher différents contenus sous une même structure et comment les données vont êtres sauvegardés.</p>
					<p>Ça m'a pris une journée entière pour construire ce thème. Au fur et à mesure je découvre de nouveaux trucs, j'ai même pris le temps de personnaliser les panneaux du Back-Office selon le module.</p>
					<p>Ce test fut couronné de succès, j'ai appris pas mal de choses sur ce test et on va pouvoir se créer d'autres thèmes que ce qui est déjà proposé.</p>
				</>,
				en: <>
					<h3>Grav template building test</h3>
					<h4>Test project for Why Agency</h4>
					<ul>
						<li>February 2021</li>
						<li>Used technologies: PHP, Twig</li>
						<li>Project finished in one day.</li>
					</ul>
					<Gallery src={[
						{format: "jpg", img: "grav/grav-1", alt:"Website preview from the Back-Office"},
						{format: "jpg", img: "grav/grav-2", alt:"Services module editing"},
						{format: "jpg", img: "grav/grav-3", alt:"Portfolio module editing"},
					]}/>
					<p>With Why Agency, we had a client who had the particularity of asking a website based on a lightweight and environmentally friendly CMS. We work on WordPress and we knew that we have to find another CMS.</p>
					<p>We approached the Grav option, it's an open source CMS based on Symfony, which is Flat-File and uses Markdown for articles and content.</p>
					<p>Grav being CMS less known than WordPress, we have fewer options for themes already built. So I suggested to the team to try the approach of building a Grav theme ourselves from a static HTML theme.</p>
					<p>So I started this test using <a href="https://startbootstrap.com/theme/creative" target="_blank" rel="noopener noreferrer" title="Thème d'origine 'Creative'">a free Bootstrap theme "Creative"</a>. I had absolutely no experience on building a theme nor the Twig language. It was a total discovery for me and it took me a lot of research on the official Grav documentation and observing how the other themes were constructed.</p>
					<p>Before beginning to convert the HTML into Twig theme, I first analyzed the HTML layout to determine how to cut it, what elements will be repeated to display different contents under the same structure, and how the data will be saved.</p>
					<p>It took me a while day to build this theme. As I discover new tricks, I even took the time to customize the Back-Office panels according to the module.</p>
					<p>This test was successful, I learned a lot about this test and we will be able to create other themes than what is already proposed.</p>
				</>
			},
			git: "https://github.com/Fred-Vaniss/creative-gh-grav",
			preview: "https://fred-vaniss.be/grav-site/"
		}
	},
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
						<h4>Projets personnels</h4>
						<ul>
							<li>2020 - 2021</li>
							<li>Technologies utilisés: LUA</li>
						</ul>
						<p>Durant mon temps libre, je développe des addons pour Garry's Mod. C'est à la fois un jeu vidéo et un outil artistique qui est hautement modulable grâce à la possibilité d'implémenter des scripts codés en LUA dans le jeu.</p>
						<p>Les créations peuvent être publiées sur le Steam Workshop où tout le monde peuvent installer les addons créés.</p>
						<hr></hr>
						<h3>SYNTHETIK HUD</h3>
						<h4>Affichage tête haute animé</h4>
						<p>Mon projet qui a connu un grand succès sur le Steam Workshop est un addon d'ATH qui reprend d'un jeu vidéo du nom de SYNTHETIK.</p>
						<p>C'est une interface qui est minimaliste et qui est animée fidèlement.</p>
						<Gallery src={[
							{format: "gif", img: "synt/synthud-1", alt:"Animation barre de vie"},
							{format: "gif", img: "synt/synthud-2", alt:"Animation du compteur de munitions"},
							{format: "jpg", img: "synt/synthud-3", alt:"La communauté Steam a adoré mon addon"}
						]}/>
						<hr></hr>
						<h3>FPV Drone</h3>
						<h4>Drone FPV pilotable</h4>
						<p>Mon hobby dans la vie réelle est le pilotage de drone FPV. C'est un drone où il n'y a pas d'assistance de stabilisation, on peut tourner dans tous les axes et on porte un masque dans les yeux qui transmet ce que le drone voit.</p>
						<p>J'ai développé cet addon qui reproduit à peu près le pilotage d'un vrai drone FPV et où on peut s'amuser dans d'innombrables cartes créées par la communauté Garry's Mod.</p>
						<p>Ce fut aussi ma toute première entité programmée qui fallait à la fois gérer le côté client et le côté serveur de cet addon.</p>
						<div className="modal-gallery">
							<div className="video-wrapper">
								<iframe width="560" 
										height="315" 
										src="https://www.youtube.com/embed/5zpn2cg4Jq8" 
										frameBorder="0" 
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
										allowFullScreen="allowfullscreen"
										title="Vidéo de démonstration du drone FPV"></iframe>
							</div>
						</div>
					</>,
				en: <>
						<h3>Addons for Garry's Mod</h3>
						<h4>Personnal projects</h4>
						<ul>
							<li>2020 - 2021</li>
							<li>Used technologies: LUA</li>
						</ul>
						<p>During my free time, I develop addons for Garry's Mod. It's both a video game and an artistic tool, it's highly modulable by the possibility to add LUA coded scripts within the game.</p>
						<p>The creations can be published on the Steam Workshop where everyone can install created addons.</p>
						<hr></hr>
						<h3>SYNTHETIK HUD</h3>
						<h4>Animated heads up display</h4>
						<p>My project that got a huge success on the Steam Workshop is an animated HUD that is based on a video game called SYNTHETIK</p>
						<p>It's a minimalistic interface which is faithfully animated.</p>
						<Gallery src={[
							{format: "gif", img: "synt/synthud-1", alt:"Animation barre de vie"},
							{format: "gif", img: "synt/synthud-2", alt:"Animation du compteur de munitions"},
							{format: "jpg", img: "synt/synthud-3", alt:"La communauté Steam a adoré mon addon"}
						]}/>
						<hr></hr>
						<h3>FPV Drone</h3>
						<h4>Pilotable FPV drone</h4>
						<p>My real life hobby is piloting FPV drone. It's a drone where there is no stabilization assist, we can turn in every angle and we wear a mask on the eyes that transmit what the drone sees.</p>
						<p>I developed this addon that reproduces approximately the piloting of a real FPV drone and where we can enjoy in countless of maps created by the Garry's Mod community.</p>
						<p>This also was my very first programmed entity where I had to manage the client side and the server side of this addon.</p>
						<div className="modal-gallery">
							<div className="video-wrapper">
								<iframe width="560" 
										height="315" 
										src="https://www.youtube.com/embed/5zpn2cg4Jq8" 
										frameBorder="0" 
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
										allowFullScreen="allowfullscreen"
										title="Demo video of my FPV drone"></iframe>
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
							{format: "jpg", img: "dnd/dnd-1", alt:"Fiche de personnage"},
							{format: "jpg", img: "dnd/dnd-2", alt:"Classe d'armure"},
							{format: "jpg", img: "dnd/dnd-3", alt:"Jets de sauvegardes"}
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
							{format: "jpg", img: "dnd/dnd-1", alt:"Character sheet"},
							{format: "jpg", img: "dnd/dnd-2", alt:"Armor class"},
							{format: "jpg", img: "dnd/dnd-3", alt:"Save throws"}
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
						{format: "jpg", img: "shoe/shoe-1", alt:"Section d'accueil du site"},
						{format: "jpg", img: "shoe/shoe-2", alt:"Bannière de catégorie ajouté manuellement"},
						{format: "jpg", img: "shoe/shoe-3", alt:"Fiche d'un produit"}
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
						{format: "jpg", img: "shoe/shoe-1", alt:"Home section of the website"},
						{format: "jpg", img: "shoe/shoe-2", alt:"Manually added category banner"},
						{format: "jpg", img: "shoe/shoe-3", alt:"Product sheet"}
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
							{format: "jpg", img: "iso/iso-1", alt: "Section ligne du temps modifié"},
							{format: "jpg", img: "iso/iso-2", alt: "Panneau latérale que j'ai créé"},
							{format: "jpg", img: "iso/iso-3", alt:"Section d'accueil que j'ai adapté en responsive"}
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
							{format: "jpg", img: "iso/iso-1", alt: "Modified timeline section"},
							{format: "jpg", img: "iso/iso-2", alt: "Sidebar I've made"},
							{format: "jpg", img: "iso/iso-3", alt:"Reworked home section that I've adapted to responsive"}
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
							{format: "jpg", img: "helio/helio-1", alt: "Page d'accueil"},
							{format: "jpg", img: "helio/helio-2", alt: "Section boutique"},
							{format: "jpg", img: "helio/helio-3", alt: "Section de présentation du produit"}
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
							{format: "jpg", img: "helio/helio-1", alt: "Homepage"},
							{format: "jpg", img: "helio/helio-2", alt: "Shop section"},
							{format: "jpg", img: "helio/helio-3", alt: "Product presentation section"}
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
			note:{
				fr: <>
					<h3>Mon site personnel</h3>
					<ul>
						<li>2019-2021</li>
						<li>Technologies utilisés: ReactJS, Sass</li>
						<li>Projet en constant évolution</li>
					</ul>
					<p>Je me suis lancé dans ce projet de création de mon propre site web afin de m'exposer en ligne et pour pouvoir montrer mes projets réalisés. Cela m'a permis de mettre un plus en pratique le ReactJS et de découvrir les procédés d'hébergement de site internet.</p>
					<p>Je suis donc passé de la création de la maquette vers le développement jusqu'à l'hébergement en ligne de mon site.</p>
					<p>Ce qui m'a motivé à le développer en React c'est sa rapidité et la possibilité d'utiliser des components réutilisable pour afficher plusieurs éléments avec la même disposition, ce qui est extrêmement utile pour afficher plusieurs éléments de mon parcous et de mon portfolio.</p>
					<p>Cela m'a également permis de découvrir le processus d'hébergement en ligne. J'ai pris un VPS et un nom de domaine chez OVH, j'ai donc dû manuellement installer les prérequis via le terminal Ubuntu de mon VPS et d'envoyer mon site par FTP.</p>
				</>,
				en: <>
					<h3>My personal website</h3>
					<ul>
						<li>2019-2021</li>
						<li>Used technologies: ReactJS, Sass</li>
						<li>Project in constant evolution</li>
					</ul>
					<p>I launched this project of creating my own website in order to exhibit myself online and to showcase my project. This allowed me to put more ReactJS into practice and to discover the process of hosting websites.</p>
					<p>So I went from creating the mock-up to the development and the online hosting of my website.</p>
					<p>What motivated me to develop it in React is its speed and the ability to use reusable components to display multiple items with the same layout, which is extremely useful for displaying my career and portfolio items.</p>
					<p>It also allowed me to discover the online hosting process. I took a VPS and a domain name from OVH, so I had to manually install the prerequisite through the Ubuntu terminal of my VPS and send my website through FTP.</p>
				</>
			},
			git: "https://github.com/Fred-Vaniss/page_perso"
		}
	},
	{
		title: "AllezCiné",
		techno: "HTML, CSS, Javascript",
		img: "cine",
		url: {
			note:{
				fr:<>
					<h3>AllezCiné</h3>
					<h4>Exercice de groupe chez BeCode</h4>
					<ul>
						<li>2019</li>
						<li>Technologies utilisés: HTML, JavaScript</li>
						<li>Exercice terminé en 3 semaines</li>
					</ul>
					<Gallery src={[
						{format: "jpg", img: "cine/cine-1", alt: "Header du site"},
						{format: "jpg", img: "cine/cine-2", alt: "Films en vedette"},
						{format: "jpg", img: "cine/cine-3", alt: "Détails d'un film"}
					]}/>
					<p>Cet exercice de groupe a eu comme principal but de mettre en pratique la répartition des tâches dans un travail de groupe, l'utilisation de GIT à plusieurs, ainsi que la mise en pratique les requêtes AJAX.</p>
					<p>Le but de cet exercice était de reproduire la maquette d'un site et qu'il soit fonctionnel. Pour cela on a utilisé l'API de <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" title="The Movie Database">The Movie Database</a> pour fournir une liste des films à jour ainsi que les détails </p>
					<p>Les différents membres de mon groupe ont eu la tâche se s'occuper de différentes parties du site tandis que je me suis occupé des requêtes de l'API et d'afficher la liste des films et les informations.</p>
					<p>La seule grosse difficulté qu'on a eue était une erreur de coordination au début du projet mais après cela, tout s'est bien passé sans encombre.</p>
				</>,
				en:<>
					<h3>AllezCiné</h3>
					<h4>Group exercice at BeCode</h4>
					<ul>
						<li>2019</li>
						<li>Used technologies: HTML, JavaScript</li>
						<li>Exercice terminée</li>
					</ul>
					<Gallery src={[
						{format: "jpg", img: "cine/cine-1", alt: "Header du site"},
						{format: "jpg", img: "cine/cine-2", alt: "Films en vedette"},
						{format: "jpg", img: "cine/cine-3", alt: "Détails d'un film"}
					]}/>
					<p>The main purpose of this group exercice was to put into practice the allocation of tasks in a group work, the use of GIT with several people and the practical application of AJAX requests</p>
					<p>The goal of this exercice was to reproduce a mock-up of a website and make it functional. For this, we used <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" title="The Movie Database">The Movie Database</a> API to provide an up-to-date list and details of the movies.</p>
					<p>The different memeber of my group had the task of taking care of different parts of the website while I took care of the API queries and displaying the list of movies and information.</p>
					<p>The only big problem we had was a miscoordination at the start of the project, but after that, everything went smoothly.</p>
				</>
			},
			git: "https://github.com/Fred-Vaniss/site-allezcine",
			preview: "https://fred-vaniss.github.io/site-allezcine/",
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
			note: {
				fr:<>
					<h3>Jeu du pendu</h3>
					<h4>Projet individuel chez BeCode</h4>
					<ul>
						<li>2019</li>
						<li>Technologies utilisés: HTML, SASS, JavaScript</li>
						<li>Projet terminé en un mois</li>
					</ul>
					<Gallery src={[
						{format: "jpg", img: "hangman/hangman-1", alt: "Exercice demandé"},
						{format: "jpg", img: "hangman/hangman-2", alt: "Première phase de développement"},
						{format: "gif", img: "hangman/hangman-3", alt: "Résultat final (GIF)"}
					]}/>
					<p>C'était à la base juste un petit exercice à base de <span className="italic">"prompt"</span> pour demander à la personne de choisir une lettre et d'afficher dans la console les lettres devinées et le nombre d'essais restants.</p>
					<p>Sauf que je suis allé beaucoup plus loin que ce qui était demandé dans l'exercice, j'ai utilisé la page HTML pour interagir avec le jeu alors qu'on n'avais pas encore évoqué le DOM en cours. Au fur et à mesure que je progresse, j'ai même ajouté des mots aléatoires, des mots complexes avec des tirets, apostrophes et des accents. Pour finir, j'ai mis une liste gigantesque dans un fichier JSON.</p>
					<p>Puis j'ai été encore plus loins en affichant le fameux bonhomme allumette au fur et à mesure qu'on épuise le nombre d'essais ainsi qu'un clavier virtuel qui change de couleur si la lettre figure dans le mot ou pas.</p>
					<p>Plus de détails dans le README de mon dépôt Github.</p>
				</>,
				en: <>
					<h3>Hangman's game</h3>
					<h4>Individual project at BeCode</h4>
					<ul>
						<li>2019</li>
						<li>Used technologies: HTML, SASS, JavaScript</li>
						<li>Project finished in a month</li>
					</ul>
					<Gallery src={[
						{format: "jpg", img: "hangman/hangman-1", alt: "Asked exercice"},
						{format: "jpg", img: "hangman/hangman-2", alt: "First phase of development"},
						{format: "gif", img: "hangman/hangman-3", alt: "Final result (GIF)"}
					]}/>
					<p>It was at first just a little exercise with a <span className="italic">"prompt"</span> that asks the person to choose a letter and display in the console the guessed letters and the number of trials remaining.</p>
					<p>Except that I went much further than what was asked for in the exercise, I used the HTML page to interact with the game while we had not mentioned the DOM in the course. As I progressed, I even added random words, complex words with dashes, apostrophes and accents. Finally, I but a gigantic list in a JSON file.</p>
					<p>Then I went even further by displaying the famous stickman as we use the of trials and a virtual keyboard that changes color whether the letter is in the word or not.</p>
					<p>More details in the README of my Github repository. (in French)</p>
				</>
			},
			git: "https://github.com/Fred-Vaniss/jeu-pendu",
			preview: "https://fred-vaniss.github.io/jeu-pendu/"
		}
	},
	{
		title: "Mel'égumes",
		techno: "HTML, SASS, JavaScript",
		img: "mel",
		url: {
			note: {
				fr: <>
					<h3>Mél'égumes</h3>
					<h4>Projet de groupe chez Technocité</h4>
					<ul>
						<li>2019</li>
						<li>Technologies utilisés: HTML, SASS, JavaScript</li>
						<li>Projet terminé en trois mois</li>
					</ul>
					<Gallery src={[
						{format: "jpg", img: "mel/mel-1", alt: "Page d'accueil"},
						{format: "jpg", img: "mel/mel-2", alt: "Un site responsive"},
						{format: "jpg", img: "mel/mel-3", alt: '"Raconte moi des salades"'}
					]}/>
					<p>Ce site a été développé dans le cadre d'une formation en UX Webdesign chez Technocité en partenariat avec Design Innovation.</p>
					<p>Le projet consiste à concevoir et de développer un site internet pour notre cliente Mélanie pour promouvoir son entreprise de permaculture Mél'égumes.</p>
					<p>La cliente n'ayant ni contenu, ni charte graphique, on a dû tout créer de nous-mêmes par équipes de trois personnes.</p>
					<p>Mes collègues se sont occupés de la mise en page, du contenu graphique et textuels tandis que je me suis occupé de coder le site.</p>
				</>,
				en: <>
					<h3>Mél'égumes</h3>
					<h4>Group project at Technocité</h4>
					<ul>
						<li>2019</li>
						<li>Used technologies: HTML, SASS, JavaScript</li>
						<li>Project finished in three months</li>
					</ul>
					<Gallery src={[
						{format: "jpg", img: "mel/mel-1", alt: "Homepage"},
						{format: "jpg", img: "mel/mel-2", alt: "A responsive website"},
						{format: "jpg", img: "mel/mel-3", alt: '"Tell me some salads (french expression)"'}
					]}/>
					<p>This website was developed as part of a UX Webdesign training course at Technocité in partnership with Design Innovation.</p>
					<p>The project consists of designing and developing a website for or client Mélanie to promote her permaculture business Mél'égumes.</p>
					<p>Since the client didn't have any content or graphics, we had to crate everything ourselves in teams of three people.</p>
					<p>My colleagues took care of the layout, the graphic and textual content, while I took care of the coding of the website.</p>
				</>
			},
			git: "https://github.com/Fred-Vaniss/site-mel-egumes",
			preview: "https://fred-vaniss.github.io/site-mel-egumes/"
		}
	},
	{
		title: "Artifact Rush",
		techno: "HTML, SASS, JavaScript",
		img: "artifact",
		url: {
			note:{
				fr: <>
						<h3>Artifact Rush</h3>
						<h4>Projet de fin d'étude de bachelier</h4>
						<ul>
							<li>Première création: 2017</li>
							<li>Refonte du site: 2019</li>
							<li>Technos: HTML, SASS, JavaScript</li>
							<li>Durée du projet: 2 mois</li>
						</ul>
						<Gallery src={[
							{format: "jpg", img: "artifact/artifact-1", alt: "Section d'accueil"},
							{format: "jpg", img: "artifact/artifact-2", alt: "Section portfolio"},
							{format: "jpg", img: "artifact/artifact-3", alt: "Détail d'un article dans un modal"}
						]}/>
						<p>C'est une refonte complète de <a href="https://speedy-vongofast.github.io/artifact-rush-website/" target="_blank" rel="noopener noreferrer nofollow">mon site de projet de fin d'études (créé en 2017)</a>. </p>
						<p>À cet époque, je n'avais quasi aucune conaissance sur la création d'un site web et des bonnes pratiques, du coup je m'étais contenté juste de prendre un thème Bootstrap et le me modifier, le résultat au format mobile était catastrophique.</p>
						<p>Je me suis donc lancé sur ce re-créer mon site à partir de zéro afin de mettre en application ce que j'avais appris en UX Webdesign chez Technocité.</p>
						<p>Cette refonte ne dépends pas de Bootstrap et toutes les fonctionnalités du site sont faites en JavaScript brut. J'ai également fait des améliorations sur la mise en page et elle est désormais parfaitement responsive.</p>
					</>,
				en: <>
						<h3>Artifact Rush</h3>
						<h4>Bachelor End-of-study work</h4>
						<ul>
							<li>First creation: 2017</li>
							<li>Re-creation: 2019</li>
							<li>Techs: HTML, SASS, JavaScript</li>
							<li>Project duration: 2 months</li>
						</ul>
						<Gallery src={[
							{format: "jpg", img: "artifact/artifact-1", alt: "Home section"},
							{format: "jpg", img: "artifact/artifact-2", alt: "Portfolio section"},
							{format: "jpg", img: "artifact/artifact-3", alt: "Article detail in a modal"}
						]}/>
						<p>This is a complete recreation of <a href="https://speedy-vongofast.github.io/artifact-rush-website/" target="_blank" rel="noopener noreferrer nofollow">my end-of-study project website (created in 2017)</a>. </p>
						<p>At that time, I had almost no knowledge about creating a website and best practices, so I had just taken a Bootstrap theme and changed it, the result in mobile format was quite catastrophic.</p>
						<p>So I embarked on this project to recreate my website from scratch in order to apply what I've learned in UX Webdesign course at Technocité.</p>
						<p>This recreation doesn't depend on Bootstrap and all the features of the website are made in vanilla JavaScript. I also made some improvements on the layout and it is now perfectly responsive.</p>
				</>
			},	
			git: "https://github.com/Fred-Vaniss/artifact-rush-website",
			preview: "https://fred-vaniss.github.io/artifact-rush-website/"
		}
	}
]