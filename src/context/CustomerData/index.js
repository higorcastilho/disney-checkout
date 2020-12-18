import React, { createContext, useContext, useState } from 'react'

const CustomerData = createContext()

export const CustomerDataProvider = ({  children }) => {
	
	const [customerData, setCustomerData] = useState({
		email: '',
		newsletter: false,
		agreement: false,
		password: '',
		paymentPlan: '',
		paymentMethod: 'creditCard',
		cardOwner: '',
		cardNumber: '',
		cardExpires: '',
		cardSecurityCode: '',
		cardPaymentMethod: '',
		storeMyPaymentInfo: false,
		cpf: ''
	})

	return (
		<CustomerData.Provider 
			value={{
				customerData,
				setCustomerData
			}}
		>
			{ children }
		</CustomerData.Provider>
	)
}

export const useCustomerData = () => {
	const context = useContext(CustomerData)
	const { customerData, setCustomerData } = context
	return {
		customerData, 
		setCustomerData
	}
}