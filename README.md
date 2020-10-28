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
		type:"entreprise",
		entreprise:"ADEVO Solutions",
		place:"Gilly",
		
		fr: {
			title:"Stage développeur web",
			time:"novembre 2019 - janvier 2020",
			desc:<>
					<p>Stage de fin de formation [...]</p>
					<p>L'entreprise étant très petite, [...]</p>
					<p>Ce stage m'a permis d'en découvrir [...] </p>
				</>,
			list:["HTML & CSS", "JavaScript", "PHP, WordPress, PrestaShop", "Photoshop", "Illustrator"],
		},
		en: {
			title:"Web development internship",
			time:"november 2019 - january 2020",
			desc:<>
					<p>The internship to end my training course [...]</p>
					<p>The company being very small, [...]</p>
					<p>This internship allowed me to discover [...]</p>
				</>,
			list:["HTML & CSS", "JavaScript", "PHP, WordPress, PrestaShop", "Photoshop", "Illustrator"],
		}

	},
    // Et ainsi de suite...     
]
```



Mon component de ligne du temps va donc créer d'autres sous-components par éléments de ma ligne du temps.

### Mes compétences et mon portfolio

Ces deux components vont suivre le même principe que la ligne du temps, un component principale, une liste et des sous components pour chaque entrée, cela simplifie beaucoup le travail et aussi pour ajouter de nouvelles entrées dans le futur.

### L'hébergement de mon site

Comme cité dans l'introduction, ce projet m'a aussi permis de découvrir le processus d'hébergement de mon site.

Mon site est hébergé par un serveur privé virtuel chez OVH avec un système d'exploitation Ubuntu Server.  J'ai dû installer manuellement le nécessaire pour pouvoir afficher mon site internet avec Apache et PHP.

J'ai appris comment me connecter à mon serveur et transférer des fichiers via [WinSCP](https://winscp.net) (on me l'a fortement recommandé par rapport à FileZilla), à m'y connecter via le terminal et à lancer les commandes.

Une fois que tout a été mis en place, j'ai acheté le nom de domaine [fred-vaniss.be](http://fred-vaniss.be).

## Conclusion

Ce fut très plaisant de coder mon site en ReactJS, la ré-utilisation des component et le JSX rend vraiment les choses beaucoup plus simples de mon point de vue et l'idée d'organiser chaque partie du site en components est une méthode de travail qui me plait beaucoup.

J'espère que mon site plaira aux visiteurs et encouragera à m'engager pour le métier de développeur web qui me plait beaucoup.