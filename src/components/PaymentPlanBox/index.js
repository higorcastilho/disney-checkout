import React from 'react'

import { useCustomerData } from '../../context/CustomerData'

import './styles.css'

const PaymentPlanBox = ({ term, price, plan }) => {

	const { customerData, setCustomerData } = useCustomerData()

	return (
		<div id="checkout-payment-plan-wrapper">
			{ ((plan === customerData.paymentPlan)) && <div 
				id="checkout-payment-plan"
				onClick={() => {
					setCustomerData({...customerData, paymentPlan: plan, price: price})
				}}
				style={{
					border: '1px solid #0483ee',
					background: '#153151'
				}}
			>
				<h5>{term}</h5>
				<p>{price}</p>
				<div className="checkbox-wrapper">
					<input
						hidden
						type="checkbox" 
						id="check"
						defaultChecked={true}
						checked={plan === customerData.paymentPlan} 
					/>
					<label
					onClick={(e) => {
						e.preventDefault()
						setCustomerData({...customerData, paymentPlan: plan, price: price})
					}} 
					htmlFor="check" className="checkmark"></label>
				</div>
			</div>}

			{ ((plan !== customerData.paymentPlan)) && <div 
				id="checkout-payment-plan"
				onClick={() => {
					setCustomerData({...customerData, paymentPlan: plan, price: price})
				}}
				style={{
					border: '',
					background: ''
				}}
			>
				<h5>{term}</h5>
				<p>{price}</p>
				<div className="checkbox-wrapper">
					<input
						hidden
						type="checkbox" 
						id="check"
						checked={plan === customerData.paymentPlan} 
					/>
					<label
					onClick={(e) => {
						e.preventDefault()
						setCustomerData({...customerData, paymentPlan: plan, price: price})
					}} 
					htmlFor="check" className="checkmark"></label>
				</div>
			</div>}
		</div>
	)
}

export default PaymentPlanBox