import React from 'react'

import { Link } from 'react-router-dom'

import DisneyLogo from '../../assets/images/disney_logo.svg'

import './styles.css'

const Header = () => {
	return (
		<header id="checkout-header">
			<section><p><Link to="/checkout-email">Entrar</Link></p></section>
			<section><img src={ DisneyLogo } alt=""/></section>
		</header>
	)
}

export default Header