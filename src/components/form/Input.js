import React from "react"
import './form.css'

function Input({ name, placeholder, type, setState, value }) {
	return (
		<div className="form-group">
			<input type={type}
				className="form-control"
				value={value}
				placeholder={placeholder}
				name={name}
				onChange={(event) => setState(event.target.value)}
			/>
		</div>
	)
}

export default Input
