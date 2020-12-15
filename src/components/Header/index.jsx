import React from 'react'

import DisneyLogo from '../../assets/images/disney_logo.svg'

import './styles.css'

const Header = () => {
	return (
		<header id="checkout-header">
			<section><p>Entrar</p></section>
			<section><img src={ DisneyLogo } alt=""/></section>
		</header>
	)
}

export default Header