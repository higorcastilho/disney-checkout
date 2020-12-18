import React, { useRef, useState, useEffect } from 'react'

import './styles.css'

const PaymentPlanBox = () => {

	const [boxInfo, setBoxInfo] = useState({
		checked: false,
		id: 1
	})

	const box = useRef()

	useEffect(() => {
		box.current.style.border = boxInfo.checked ? '1px solid #0483ee' : ''
		box.current.style.background = boxInfo.checked ? '#153151' : ''
	}, [boxInfo])

	return (
		<div 
			ref={box}
			id="checkout-payment-plan"
			onClick={() => {
				setBoxInfo({...boxInfo, checked: !boxInfo.checked})
			}}
		>
			<h5>Mensal</h5>
			<p>RS$ 27,90</p>
			<div className="checkbox-wrapper">
				<input
					hidden
					type="checkbox" 
					id="check"
					checked={boxInfo.checked} 
				/>
				<label
				onClick={(e) => {
					e.preventDefault()
					setBoxInfo({...boxInfo, checked: !boxInfo.checked})
				}} 
				htmlFor="check" className="checkmark"></label>
			</div>
		</div>
	)
}

export default PaymentPlanBox