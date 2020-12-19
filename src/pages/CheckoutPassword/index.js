import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useCustomerData } from '../../context/CustomerData'

import Footer from '../../components/Footer'
import Spinner from '../../components/Spinner'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const CheckoutPassword = () => {

	const history = useHistory()
	const { customerData, setCustomerData } = useCustomerData()
	const [ hidePassword, setHidePassword ] = useState(true)
	const [ toggleSpinner, setToggleSpinner ] = useState('none')

	const handleHidePassword = () => {
		setHidePassword(() => !hidePassword)
	}

	const handleCheckPassword = () => {
		setToggleSpinner('block')
		setTimeout(() => {
			setToggleSpinner('none') 
			history.push('/checkout-payment')
		}, 2000)
	}

	return (
		<div id="checkout-password-wrapper">
			<main id="checkout-password-main">
				<p>PASSO 3 DE 4</p>
				<h3>Crie uma senha</h3>
				<div>
					<input 
						placeholder="Senha"
						onChange={e => {
							setCustomerData({...customerData, password: e.target.value})
						}} 
						type={ hidePassword ? 'password' : 'text'}
					/>
					<FontAwesomeIcon 
						className="font-awesome-eye" 
						id="font-awesome-slashed-eye" 
						onClick={() => handleHidePassword()} 
						style={{display: hidePassword ? 'block' : 'none'}}
						icon={faEyeSlash} 
					/>
					<FontAwesomeIcon 
						className="font-awesome-eye" 
						id="font-awesome-eye" 
						onClick={() => handleHidePassword()} 
						style={{display: hidePassword ? 'none' : 'block'}}
						icon={faEye} 
					/>
				</div>
				<section>
					<p>
					Use no mínimo seis caracteres (com distinção entre maiúsculas
					e minúsculas) com pelo menos um número ou caractere especial. 
					</p>
				</section>
			</main>
			<article id="checkout-password-article">
				<p>Você vai usar este e-mail para entrar:</p>
				<h4>higor@mail.com</h4>
			</article>
			<button 
				onClick={() => { 
					handleCheckPassword()
					console.log(customerData)
				}} 
				to="/checkout-payment"
			>
				<Spinner toggleSpinner={toggleSpinner}/>
				{ (toggleSpinner === 'none') && <p>CONTINUAR</p> }
			</button>
			<Footer marginTop="34rem"/>
		</div>
	)
}

export default CheckoutPassword