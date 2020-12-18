import React from 'react'

import { useCustomerData } from '../../context/CustomerData'

import './styles.css'

const PaymentMethodBox = ({ img, title, method }) => {	

	const { customerData, setCustomerData } = useCustomerData()

	const handleSetPaymentMethod = () => {
		setCustomerData({...customerData, paymentMethod: method})
	}
	
	return (
		<div onClick={ handleSetPaymentMethod } id="checkout-payment-method">
			<section>
				<img src={img} alt=""/>
				<p>{title}</p>
			</section>
			
			{ (customerData.paymentMethod === method) && <div id="payment-method-border-bottom-selected" ></div> } 
			{ (customerData.paymentMethod !== method) && <div id="payment-method-border-bottom-not-selected" ></div> } 
		</div>
	)
}

export default PaymentMethodBox