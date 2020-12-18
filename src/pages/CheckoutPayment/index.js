import React from 'react'

import { Link } from 'react-router-dom'

import PaymentPlanBox from '../../components/PaymentPlanBox'

import './styles.css'

const CheckoutPayment = () => {	
	
	return (
		<div id="checkout-payment-wrapper">
			<main id="checkout-payment-main">
				<p>PASSO 4 DE 4</p>
				<h3>Faça um teste grátis de 7 dias</h3>
				<section>
					<p>
						Depois, R$ 27,90/mês. Cancele quando quiser. Cancele antes de 
						23 de dezembro de 2020 para evitar cobranças. 
					</p>
				</section>
				<section id="checkout-payment-choose-a-plan">
				
					<PaymentPlanBox />
					<PaymentPlanBox />

				</section>
				<article id="checkout-payment-info">

				</article>
			</main>
			<Link to="/checkout-payment">CONTINUAR</Link>
		</div>
	)
}

export default CheckoutPayment