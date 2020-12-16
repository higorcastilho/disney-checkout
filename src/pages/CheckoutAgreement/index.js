import React from 'react'

import { Link } from 'react-router-dom'

import './styles.css'

function CheckoutAgreement () {
	return (
		<div id="checkout-agreement-wrapper">
			<main id="checkout-agreement-main">
				<p>PASSO 2 DE 4</p>
				<h3>Contrato de Assinatura</h3>
			</main>
			<article id="checkout-agreement-article">				
			</article>
			<section>
				<div>
					Ao clicar em "Concordar e Continuar", você confirma que leu nosso
					Contrato de Assinatura na íntegra e concorda com ele.
				</div>
				<Link to="/checkout-password">CONCORDAR E CONTINUAR</Link>
			</section>

		</div>
	)
}

export default CheckoutAgreement