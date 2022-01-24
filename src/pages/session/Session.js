import React, { useState, createContext } from "react"
import ButtonSubmit from "../../components/form/ButtonSubmit"
import FormHeading from "../../components/form/FormHeading"
import Input from "../../components/form/Input"

function Session() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('');

	const chech_auth = (email, password) => {
		const user_email = sessionStorage.getItem('email')
		const user_password = sessionStorage.getItem('password')
		if (user_email === email && user_password === password) {
			sessionStorage.setItem('isLoggedIn', true)
			window.location.href = 'http://localhost:3000/'
		} else {
			setError("Incorrect email or password!");
			return;
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (email && password) {
			chech_auth(email, password)
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
				<FormHeading heading="Sign In" />
				<Input type="email" value={email} placeholder="Enter Email" name="email" setState={setEmail} />
				<Input type="password" value={password} placeholder="Enter Password" name="password" setState={setPassword} />
				<ButtonSubmit handleOnSubmit={handleSubmit} />
			</form>
		</div>
	)
}

export default Session
