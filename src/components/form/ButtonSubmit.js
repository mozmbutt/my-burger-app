import React from "react"
import './form.css'

function ButtonSubmit({ handleOnSubmit }) {
	return (
		<div>
			<button type="submit"
				className="btn-submit"
				onClick={handleOnSubmit}>
				Submit
			</button>
		</div>
	)
}

export default ButtonSubmit
