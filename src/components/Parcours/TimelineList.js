import React from 'react';

/* 
 * Types: 	Entreprise (building icon)
 * 			Formation (book icon)
 * 			Graduation (cap icon)
 */
export const TimelineList = [
	{
		type:"entreprise",
		title:"Stage développeur web",
		time:"novembre 2019 - janvier 2020",
		entreprise:"ADEVO Solutions",
		place:"Gilly",
		desc:<>
				<p>Stage de fin de formation de BeCode dans une agence créative et marketing. J'ai réalisé et participé au développement de plusieurs autres projets WordpPress et PrestaShop.</p>
				<p> L'entreprise étant très petite, j'ai été très polyvalent durant ce stage. J'ai du aussi utiliser mes compétences de graphiste pour créer des images, des pictogrammes, des logos, concevoir la disposition d'un site et veiller à ce que les images soient bien optimisés.</p>
				<p>Ce stage m'a permis d'en découvrir beaucoup plus sur Wordpress et Prestashop et à apprendre beaucoup de choses sur le développement web.</p>
			</>,
		list:["HTML & CSS", "JavaScript", "PHP, WordPress, PrestaShop", "Photoshop", "Illustrator"]
	},
	{
		type:"formation",
		title:"Formation développeur web",
		time:"avril - octobre 2019",
		entreprise:"BeCode",
		place:"Charleroi",
		desc:<>
				<p>Formation intensive dans le développement front-end et back-end. Contrairement à ma précédente formation chez Technocité, cette formation est entièrement focalisé sur la programmation web.</p>
				<p>On a appris à apprendre différents langages de programmation ainsi que les différents frameworks. La particularité de cette formation est qu'on a peu de cours et qu'on est majoritairement livré à nous-même pour suivre les parcours supervisés par des coachs.</p> 
				<p>On a également réalisé plusieurs travaux de groupe, participés à divers evénements tels que les Hackathons, Coder Dojos et autres...</p>
			</>,
		list:["Git", "HTML & CSS & SASS", "JavaScript, NodeJS, ReactJS", "PHP & MySQL & Wordpress"]
	},
	{
		type:"formation",
		title:"Formation UX Webdesign",
		time:"octobre 2018 - février 2019",
		entreprise:"Technocité",
		place:"Hornu",
		desc:<>
				<p>Cette formation m'a appris à concevoir des sites web ergonomique qui sensibilise beaucoup sur l'accessibilité et l'expérience utilisateur.</p>
				<p>On nous à également appris sur des méthodes pour améliorer notre créativités, différents méthodes de travail en équipe tel que la méthode agile ainsi que l'utilisation de "personnas".</p>
				<p>On nous a également confié un projet client pour une entreprise de permaculture du nom de <span className="italic">Mel'égumes</span> qui à été réalisé tout au long de la formation par équipes de trois personnes.</p>
			</>,
		list:["HTML & CSS & SASS", "JavaScript", "Conception et intégration de sites web", "Méthode agile", "Responsive webdesign"]
	},
	{
		type:"entreprise",
		title:"Stage infographie",
		time:"mai - juin 2016",
		entreprise:"Artistic Studio",
		place:"Marchienne-au-pont",
		desc:<>
				<p>Stage de fin d’études dans une entreprise de graphiste où j’ai réalisé plusieurs tâches et travaux graphique.</p>
			</>,
		list:["Création d'affiche et carte de visite", "Mise en page de flyers", "Création de logos", "Montage vidéo"]
	},
	{
		type:"graduation",
		title:"Bachelier en infographie",
		time:"2012 - 2017",
		entreprise:"ISIPS",
		place:"Charleroi",
		desc:<>
				<p>Cet étude m'a fait découvrir tous les horizons de l'infographie.</p>
				<p>À la fin de ces trois ans, j'ai réalisé mon projet de fin d'étude sur <strong>Artifact Rush</strong> et j'ai décroché mon Bachelier avec une grande distinction.</p>
			</>,
		list:['Adobe Photoshop, Illustrator & InDesign', 'HTML & CSS', 'After Effect', 'Blender']
	}
]
