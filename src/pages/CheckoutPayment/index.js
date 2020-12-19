import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { useCustomerData } from '../../context/CustomerData'

import PaymentPlanBox from '../../components/PaymentPlanBox'
import PaymentMethodBox from '../../components/PaymentMethodBox'
import Input from '../../components/Input'
import Select from '../../components/Select'
import StoreMyInfo from '../../components/StoreMyInfo'
import Footer from '../../components/Footer'

import CreditCard from '../../assets/images/credit_card.svg'
import PayPal from '../../assets/images/paypal.svg'
import PayPalButton from '../../assets/images/paypal_button.svg'

import './styles.css'

const CheckoutPayment = () => {	

	const { customerData } = useCustomerData()
	const [ togglePayPalButton, setTogglePayPalButton ] = useState('none')

	window.addEventListener('scroll', () => { 
		const yPos = window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
		if (yPos < -.7) {
			setTogglePayPalButton('block')
		}
	})



	return (
		<div id="checkout-payment-wrapper">
			<main id="checkout-payment-main">
				<p>PASSO 4 DE 4</p>
				<h3>Faça um teste grátis de 7 dias</h3>
				<section>
					<p>
						Depois, {customerData.price}/mês. Cancele quando quiser. Cancele antes de 
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
							placeholder={false}
							icon={false}
							images={true}
						/>

						<section>
							<Input 
								title="DATA DE VALIDADE"
								placeholder="MM/AA"
								icon={false}
								images={false}
								minWidth={true}
							/>

							<Input 
								title="CÓD DE SEGURANÇA"
								placeholder="CVV"
								icon={true}
								images={false}
							/>
						</section>

						<Select 
							title="FORMA DE PAGAMENTO COM CARTÃO"
						/>

						<StoreMyInfo />

						<Input 
							title="CPF"
							placeholder=""
							icon={true}
							images={false}
						/>
						<p>
							Ao selecionar "Concordar e Assinar", você concorda
							em iniciar a assinatura imediatamente e que o pagamento
							mensal ou anual não é reembolsável.
							Enviaremos um aviso 30 dias antes da renovação
							anual. Se você não cancelar a assinatura antes do
							término do teste grátis em 25 de dezembro de 2020,
							cobraremos a anuidade ou mensalidade padrão de forma 
							recorrente na sua forma de pagamento cadastrada. Você
							pode cancelar quando quiser e o cancelamento entrará em
							vigor no final do período de cobrança. ATENÇÃO: no caso 
							de cartões múltiplos (função crédito/débito), a cobrança
							será na função crédito.
						</p>
						<Link to="/checkout-payment">CONCORDAR E ASSINAR</Link>
					</div>}

					{ (customerData.paymentMethod === 'paypal') && <div id="paypal-method-selected" >
						<StoreMyInfo />

						<Input 
							title="CPF"
							placeholder=""
							icon={true}
							images={false}
						/>

						<p>
							Faça um teste grátis com O PayPal. Para concluir a 
							assinatura, clique no botão Pague com PayPal e use
							seu e-mail e senha para entrar no PayPal.
						</p>
						<p>
							Ao selecionar "Pague com PayPal", você concorda
							em iniciar a assinatura imediatamente e que o pagamento
							mensal ou anual não é reembolsável.
							Enviaremos um aviso 30 dias antes da renovação
							anual. Se você não cancelar a assinatura antes do
							término do teste grátis em 25 de dezembro de 2020,
							cobraremos a anuidade ou mensalidade padrão de forma 
							recorrente na sua forma de pagamento cadastrada. Você
							pode cancelar quando quiser e o cancelamento entrará em
							vigor no final do período de cobrança. ATENÇÃO: no caso 
							de cartões múltiplos (função crédito/débito), a cobrança
							será na função crédito. 
						</p>
						<Link to="/checkout-payment">
							{ (togglePayPalButton === 'block') && <p>Pague com</p> }
							<img 
								src={PayPalButton} 
								alt=""
							/>
						</Link>
					</div>}
				
				</article>

			</main>
			<Footer marginTop="30rem"/>
		</div>
	)
}

export default CheckoutPayment