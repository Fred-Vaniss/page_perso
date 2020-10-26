import React, { useState, useEffect } from 'react';
import { LocNavbar } from './Localization';

const Navbar = props => {
	const [sticky, setSticky] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	const handleScroll = () => {
		if (window.pageYOffset > window.innerHeight-60){
			setSticky(true);
		} else {
			setSticky(false);
		}
	}

	const openMenu = () => {
		setMenuOpen(!menuOpen);
	}

	const closeMenu = () => {
		if (menuOpen === true){
			setMenuOpen(false);
		}
	}

	const loc = LocNavbar;
	const Cv = `/assets/cv.pdf`

	return(
		<>
			<div className={`menu-dim ${menuOpen ? "dimmer" : ""}`} onClick={() => closeMenu()}></div>
			<div className={(sticky) ? "nav-bar sticky" : "nav-bar"}>
				<button onClick={() => openMenu()} className="burger-button">Menu</button>
				<div className={`menu ${(menuOpen) ? "menu-open" : ""}`}>
					<div className="menu-box">
						<a href={Cv} className="download-cv" target="_blank" rel="noopener noreferrer">CV PDF</a>
					</div>
					<div className="menu-box">
						<nav>
							<ul>
								<li><a href="#about" 		onClick={closeMenu}>{loc.about[props.lang]}</a></li>
								<li><a href="#skills" 		onClick={closeMenu}>{loc.skills[props.lang]}</a></li>
								<li><a href="#experience" 	onClick={closeMenu}>{loc.career[props.lang]}</a></li>
								<li><a href="#portfolio" 	onClick={closeMenu}>Portfolio</a></li>
								<li><a href="#contact" 		onClick={closeMenu}>Contact</a></li>
							</ul>
						</nav>
					</div>
					<div className="menu-box">
						<div className="lang-switcher">
							<button onClick={props.handleButton}>{loc.lang[props.lang]}</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar;