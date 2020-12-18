import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import Visa from '../../assets/images/visa.svg'
import Mastercard from '../../assets/images/mastercard.svg'

import './styles.css'

const Select = ({ title }) => {
	return (
		<div id="select-payment-info">
			<p>{ title }</p>
			<section>
				<select>
					<option disabled selected hidden>Selecione crédito ou débito</option>
					<option value="creditCard">Cartão de crédito</option>
					<option value="debitCard">Cartão de débito</option>
				</select>
			</section> 
		</div>
	)
}

export default Select