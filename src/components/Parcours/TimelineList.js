import React from 'react';

/* 
 * Types: 	Entreprise (building icon)
 * 			Formation (book icon)
 * 			Graduation (cap icon)
 */
export const TimelineList = [
	{
		type:"entreprise",
		entreprise:"Why Agency",
		list:["HTML & CSS", "JavaScript", "PHP, WordPress, Grav"],
		
		fr: {
			time:"2020 - présent",
			title:"Développeur web",
			desc:<>
					<p>Travail en freelance dans le développement de sites WordPress et Grav.</p>
				</>
			
		},
		en: {
			time:"2020 - present",
			title:"Web developer",
			desc:<>
					<p>Freelance work in the development of WordPress websites.</p>
				</>
		}
	},
	{
		type:"entreprise",
		entreprise:"ADEVO Solutions",
		place:"Gilly",
		time:"2019 - 2020",
		list:["HTML & CSS", "JavaScript", "PHP, WordPress, PrestaShop", "Photoshop", "Illustrator"],
		
		fr: {
			title:"Stage développeur web",
			desc:<>
					<p>Stage de fin de formation de BeCode dans une agence créative et marketing. J'ai réalisé et participé au développement de plusieurs autres projets WordpPress et PrestaShop.</p>
					<p>L'entreprise étant très petite, j'ai été très polyvalent durant ce stage. J'ai du aussi utiliser mes compétences de graphiste pour créer des images, des pictogrammes, des logos, concevoir la disposition d'un site et veiller à ce que les images soient bien optimisés.</p>
					<p>Ce stage m'a permis d'en découvrir beaucoup plus sur Wordpress et Prestashop et à apprendre beaucoup de choses sur le développement web.</p>
				</>
		},
		en: {
			title:"Web development internship",
			desc:<>
					<p>The internship to end my training course at BeCode in a creative and marketing agency. I realized and participated on multiple WordPress and PrestaShop development projects.</p>
					<p>The company being very small, I was very versatile during this internship. I also had to use my graphic designer skills to create images, pictograms, logos and designing a website layout and ensure that the images are well optimized.</p>
					<p>This internship allowed me to discover more about Wordpress and Prestashop and learning more about web development.</p>
				</>
		}

	},
	{
		type:"formation",
		entreprise:"BeCode",
		place:"Charleroi",
		time:"2019",
		list:["Git", "HTML & CSS & SASS", "JavaScript, NodeJS, ReactJS", "PHP & MySQL & Wordpress"],
		
		fr: {
			title:"Formation développeur web",
			desc:<>
					<p>Formation intensive dans le développement front-end et back-end. Contrairement à ma précédente formation chez Technocité, cette formation est entièrement focalisé sur la programmation.</p>
					<p>J'ai appris à apprendre différents langages de programmation ainsi que les différents frameworks. La particularité de cette formation est qu'on a peu de cours et qu'on est majoritairement livré à nous-même pour suivre les parcours supervisés par des coachs.</p> 
					<p>J'ai également réalisé plusieurs travaux de groupe, participés à divers evénements tels que les Hackathons, Coder Dojos et autres...</p>
				</>
		},
		en: {
			title:"Web dev training course",
			desc:<>
					<p>An intensive training course on front-end and back-end web development. Unlike my previous training course at Technocité, this one is entirely focused on programming.</p>
					<p>I learned to learn different programming languages and frameworks as well. The particularity on this training course is we have very few courses and we are on our own to follow the courses supervised by coaches.</p>
					<p>I also carried out several group work, participated at diverse events like Hackathons, Coder Dojos and more...</p>
				</>
		}
		
	},
	{
		type:"formation",
		entreprise:"Technocité",
		place:"Hornu",
		time:"2018 - 2019",

		fr: {
			title:"Formation UX Webdesign",
			desc:<>
					<p>Cette formation m'a appris à concevoir des sites web ergonomique qui sensibilise beaucoup sur l'accessibilité et l'expérience utilisateur.</p>
					<p>J'ai appris sur des méthodes pour améliorer ma créativité, différents méthodes de travail en équipe tel que la méthode agile ainsi que l'utilisation de "personnas".</p>
					<p>J'ai également travaillé un projet client pour une entreprise de permaculture du nom de <span className="italic">Mel'égumes</span> qui à été réalisé tout au long de la formation par équipes de trois personnes.</p>
				</>,
			list:["HTML & CSS & SASS", "JavaScript", "Conception et intégration de sites web", "Méthode agile", "Responsive webdesign"]
		},
		en: {
			title:"UX Webdesign training course",
			desc:<>
					<p>This training has taught me how to design ergonomic websites that raise awareness about accessibility and user experience</p>
					<p>I learned about methods to improve my creativity, different teamwork methods such as the agile software development and the use of "personas"</p>
					<p>I also worked on a client project for a permaculture company named <span className="italic">Mel'égumes</span> which was carried throughout the training by teams of three persons.</p>
				</>,
			list:["HTML & CSS & SASS", "JavaScript", "Website designing and integration", "Agile software development", "Responsive webdesign"]
		}
	},
	{
		type:"entreprise",
		entreprise:"Artistic Studio",
		place:"Marchienne-au-pont",
		time:"2016",

		fr: {
			title:"Stage infographie",
			desc:<>
					<p>Stage de fin d’études dans une entreprise de graphiste où j’ai réalisé plusieurs tâches et travaux graphique.</p>
				</>,
			list:["Photoshop, Illustrator & InDesign","Création d'affiche et carte de visite", "Mise en page de flyers", "Création de logos", "Montage vidéo"]
		},
		en: {
			title:"Graphic designer internship",
			desc:<>
					<p>Graduation internship at a graphic designer's company where I've performed several tasks and graphic works.</p>
				</>,
			list:["Photoshop, Illustrator & InDesign","Poster and business card creation", "Flyers layout", "Logos creation", "Video editing"]
		}
	},
	{
		type:"graduation",
		entreprise:"ISIPS",
		place:"Charleroi",
		time:"2012 - 2017",
		list:["Adobe Photoshop, Illustrator & InDesign", "HTML & CSS", "After Effect", "Avid Pro Tools", "Blender"],

		fr: {
			title:"Bachelier en infographie",
			desc:<>
					<p>Cet étude m'a fait découvrir tous les horizons de l'infographie.</p>
					<p>À la fin de ces trois ans, j'ai réalisé mon projet de fin d'étude sur <strong>Artifact Rush</strong> et j'ai décroché mon Bachelier avec une grande distinction.</p>
				</>
		},
		en: {
			title:"Computer graphics bachelor",
			desc:<>
					<p>This study made me discover all the horizons of graphic design.</p>
					<p>At the end of these three years, I completed my graduation project on <strong>Artifact Rush</strong> and earned my bachelor’s degree with great distinction.</p>
				</>
		}
	}
]
