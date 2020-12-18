import React from 'react'

import DisneyLogo from '../../assets/images/disney_logo.svg'

import './styles.css'

const Footer = ({marginTop}) => {
	return (
		<footer 
			id="checkout-footer"
			style={{marginTop: marginTop}}
		>
			<img src={DisneyLogo} alt=""/>
		</footer>
	)
}

export default Footer