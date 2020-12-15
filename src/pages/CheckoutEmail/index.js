import React from 'react'

import { Link } from 'react-router-dom'

import './styles.css'

const CheckoutEmail = () => {
	return (
		<div id="checkout-email-wrapper">
			<main id="checkout-main">
				<p>PASSO 1 DE 4</p>
				<h3>Digite o seu e-mail</h3>
				<input placeholder="E-mail" />
				<section>
					<input type="checkbox" />
					<p>
					Sim! Quero receber notícias, ofertas especiais e outras
					informações do Disney+ e das empresas do grupo Walt Disney. 
					</p>
				</section>
			</main>
			<article id="checkout-article">
				<p>A Disney usará os seus dados para oferecer e dar suporte aos
				serviços, personalizar e melhorar a sua experiência no Disney+ e 
				para enviar informações. Você pode alterar as preferências de 
				comunicação quando quiser. Podemos usar esses dados conforme explica a nossa <a href="#">Política de Privacidade</a>,
				inclusive compartilhá-los com as Empresas do grupo Walt Disney.
				Ao clicar em "Continuar", você confirma que leu a nossa 
				<a href="#">Política de Privacidade</a> e os termos específicos
				aplicáveis ao Brasil.
				</p>
				<Link to="/checkout-agreement">CONTINUAR</Link>
			</article>
		</div>
	)
}

export default CheckoutEmail