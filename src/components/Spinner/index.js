import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const Spinner = ({ toggleSpinner }) => {
	return (
		<div id="spinner-wrapper">
				<FontAwesomeIcon 
					id="spinner" 
					icon={faCircleNotch}
					style={{display: toggleSpinner}} 
				/>
		</div>
	)
}

export default Spinner