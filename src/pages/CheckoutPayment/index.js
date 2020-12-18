import React from 'react'

import { Link } from 'react-router-dom'

import { useCustomerData } from '../../context/CustomerData'

import PaymentPlanBox from '../../components/PaymentPlanBox'
import PaymentMethodBox from '../../components/PaymentMethodBox'
import Input from '../../components/Input'

import CreditCard from '../../assets/images/credit_card.svg'
import PayPal from '../../assets/images/paypal.svg'

import './styles.css'

const CheckoutPayment = () => {	

	const { customerData } = useCustomerData()

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
					<PaymentPlanBox 
						term="Mensal"
						price="R$ 27,90"
						plan="monthly"
					/>
					<PaymentPlanBox 
						term="Anual"
						price="R$ 279,90"
						plan="yearly"
					/>
				</section>
				
				<section id="checkout-payment-choose-a-method">
					
					<PaymentMethodBox
						img={CreditCard} 
						title="Crédito/Débito"
						method="creditCard"
					/>

					<PaymentMethodBox
						img={PayPal} 
						title="PayPal"
						method="paypal"
					/>	

				</section>
				
				<article id="checkout-payment-info">
				
					{ (customerData.paymentMethod === 'creditCard') && <div id="credit-card-method-selected">
						
						<Input 
							title="TITULAR DO CARTÃO"
							placeholder=""
						/>

						<Input 
							title="NÚMERO DO CARTÃO"
							placeholder=""
							icon=""
							images="true"
						/>

						<section>
							<Input 
								title="DATA DE VALIDADE"
								placeholder="MM/AA"
								icon=""
								images=""
								minWidth={true}
							/>

							<Input 
								title="CÓD DE SEGURANÇA"
								placeholder="CVV"
								icon="true"
								images=""
							/>
						</section>

					</div>}

					{ (customerData.paymentMethod === 'paypal') && <div id="paypal-method-selected" >PayPal</div>}
				
				</article>

			</main>
			<Link to="/checkout-payment">CONTINUAR</Link>
		</div>
	)
}

export default CheckoutPayment