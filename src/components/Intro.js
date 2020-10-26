import React from 'react'
import { Navbar } from './'
import {LocIntro} from './Localization'

const Intro = props => {
	const Logo = `/assets/img/logo-bg.svg`
	return(
		<section id="intro">
			<div className="wrapper fullscreen">
				<div className="logo-container">
					<img src={Logo} alt="Logo" className="logo-big puff-in-center"/>
				</div>
				<div className="intro-title animated fadeInDown">
					{LocIntro[props.lang]}
				</div>
			</div>
			<Navbar lang={props.lang} handleButton={props.handleButton}/>
		</section>
	)
}

export default Intro;