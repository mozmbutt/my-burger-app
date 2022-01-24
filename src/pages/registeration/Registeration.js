import React, { useCallback, useState } from "react"
import ButtonSubmit from "../../components/form/ButtonSubmit"
import FormHeading from "../../components/form/FormHeading"
import Input from "../../components/form/Input"
import './registeration.css'

function Registeration() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirm_password, setConfirmPassword] = useState('')
	const [error, setError] = useState('');

	const match_password = (password, confirm_password) => {
		if (password === confirm_password) {
			sessionStorage.setItem("email", email);
			sessionStorage.setItem("password", password);
			window.location.href = 'http://localhost:3000/signin'
		} else {
			setError("Password should match!");
			return;
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (email && password && confirm_password) {
			match_password(password, confirm_password)
		} else {
			setError("Fields are required!");
			return
		}
	}

	return (
		<div className="auth-form">
			<form>
				{
					error &&
					<h4 id='alert'>
						{error}
					</h4>
				}
				<FormHeading heading="Sign Up" />
				<Input type="email" value={email} placeholder="Enter Email" name="email" setState={setEmail} />
				<Input type="password" value={password} placeholder="Enter Password" name="password" setState={setPassword} />
				<Input type="password" value={confirm_password} placeholder="Confirm Password" name="confirm_password" setState={setConfirmPassword} />
				<ButtonSubmit handleOnSubmit={handleSubmit} />
			</form>
		</div>
	)
}

export default Registeration
