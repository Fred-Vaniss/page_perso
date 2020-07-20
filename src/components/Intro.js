import React from 'react'
import { Navbar } from './'
import Logo from '../assets/logo-bg.svg'
import {LocIntro} from './Localization'

const Intro = props => {
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
			<Navbar/>
		</section>
	)
}

export default Intro;