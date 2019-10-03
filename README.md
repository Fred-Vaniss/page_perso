# Mon site perso

* Projet solo
* Septembre - Octobre 2019
* ReactJS, SASS, PHP
* Site web: [fred-vaniss.be](http://fred-vaniss.be)

Je me suis lancé dans ce projet de création de mon propre site web afin d'exposer mon profil en ligne et pour pouvoir exposer mes travaux. Cela m'a permis de mettre un plus en pratique le ReactJS et de découvrir les procédés d'hébergement de site internet.

## Création de la maquette

Avant toute chose il faut toujours planifier ce qu'on veut faire, j'ai donc procédé à la création de la maquette de mon site sur Illustrator pour la version bureau ainsi que la version téléphone mobile.

Comme j'ai prévu de le faire en ReactJS, cela m'a également permis de pouvoir planifier comment je vais répartir mes components, comment gérer plus facilement l'ajout de contenu.

## Le développement de mon site

### Mon parcours avec la ligne du temps

J'ai tout d'abord commencé par la partie ligne du temps de mon site, car c'est la partie qui m'a paru la plus complexe à mettre en place, autant dans le côté code que dans le côté style.

Comme c'est une partie où je pourrais rajouter du contenu par la suite, j'ai créé un fichier qui accueillera toutes les entrées que mon components générera depuis celui-ci (un genre de fichier json). Chaque élément contient un titre, le type d'entrée qui va définir le pictogramme, le nom de l'établissement, le lieu, la date, et la description.

```javascript
export const TimelineList = [
	{
		type:"formation",
		title:"Formation développeur web",
		time:"avril - octobre 2019",
		entreprise:"BeCode",
		place:"Charleroi",
		desc:"Formation intensive dans le développement front-end et back-end. On a appris à apprendre différents langages de programmation ainsi que les différents frameworks. On a également réalisé plusieurs travaux de groupe, participés aux événements tels que les Hackathons, Coder Dojos et autres...",
		list:["Git", "HTML & CSS & SASS", "JavaScript, NodeJS, ReactJS", "PHP & MySQL & Wordpress"]
	},
	{
		type:"formation",
		title:"Formation UX Webdesign",
		time:"octobre 2018 - février 2019",
		entreprise:"Technocité",
		place:"Hornu",
		desc:"Formation dans le design et intégration de site web en prenant compte de l’expérience utilisateur. ",
		list:["HTML & CSS & SASS", "JavaScript", "Conception et intégration de sites web", "Méthode agile", "Responsive webdesign"]
	}
    // Et ainsi de suite...     
]
```



Mon component de ligne du temps va donc créer d'autres sous-components par éléments de ma ligne du temps.

### Mes compétences et mon portfolio

Ces deux components vont suivre le même principe que la ligne du temps, un component principale, une liste et des sous components pour chaque entrée, cela simplifie beaucoup le travail et aussi pour ajouter de nouvelles entrées dans le futur.

### Le formulaire

C'était sans doute la partie la plus compliquée à mettre en place. Entre la découverte totale, la recherche de moyen pour le faire fonctionner et les complications techniques...

Au départ je me suis servi de [Formstatic](https://formstatic.dev/) pour gérer le formulaire, mais je me suis dit que ce n'était pas top et que ça ne plairait pas à certains que les informations passent par un intermédiaire inconnu.

J'ai donc fait mon propre traitement en PHP via [PHPMailer](https://github.com/PHPMailer/PHPMailer) pour gérer l'envoi du formulaire. J'ai créé une autre adresse e-mail qui se chargera de m'envoyer les messages du formulaire de mon site. Mon code PHP va sanitizer les informations et PHPMailer va pouvoir envoyer le message par le biais de ma seconde adresse e-mail qui m'enverra les messages du formulaire (étant donné que mon code PHP contiens les identifiants de mon second compte e-mail, la partie PHP du site n'est pas incluse dans mon dépôt)

### L'hébergement de mon site

Comme cité dans l'introduction, ce projet m'a aussi permis de découvrir le processus d'hébergement de mon site.

Mon site est hébergé par un serveur privé virtuel chez OVH avec un système d'exploitation Ubuntu Server.  J'ai dû installer manuellement le nécessaire pour pouvoir afficher mon site internet avec Apache et PHP.

J'ai appris comment me connecter à mon serveur et transférer des fichiers via [WinSCP](https://winscp.net) (on me l'a fortement recommandé par rapport à FileZilla), à m'y connecter via le terminal et à lancer les commandes.

Une fois que tout a été mis en place, j'ai acheté le nom de domaine [fred-vaniss.be](http://fred-vaniss.be).

## Conclusion

Ce fut très plaisant de coder mon site en ReactJS, le JSX rend vraiment les choses beaucoup plus simples de mon point de vue et l'idée d'organiser chaque partie du site en components est une méthode de travail qui me plait beaucoup.

J'espère que mon site plaira aux visiteurs et encouragera à m'engager pour le métier de développeur web qui me plait beaucoup.

