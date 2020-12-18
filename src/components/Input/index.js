import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import Visa from '../../assets/images/visa.svg'
import Mastercard from '../../assets/images/mastercard.svg'

import './styles.css'

const Input = ({ title, placeholder, icon, images, minWidth}) => {
	return (
		<div id="input-payment-info">
			<p>{ title }</p>
			
			{ (!minWidth) && <section
					style={{minWidth: '10px'}}
				>
				<input 
					placeholder={ placeholder } 
				/>
			</section> }

			{ (minWidth) && <section
					style={{
						minWidth: '10px',
						maxWidth: '500px',
						width: '95%',
					}}
				>
				<input 
					placeholder={ placeholder } 
				/>
			</section> }

			{ (images) && <div className="flag-card">
				<img src={Visa} alt="" />
				<img src={Mastercard} alt="" />
			</div>}

			{ (icon) && <FontAwesomeIcon 
				className="font-awesome-icon" 
				icon={faInfoCircle} 
			/> }

		</div>
	)
}

export default Input