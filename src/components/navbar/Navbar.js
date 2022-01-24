import React from "react"
import './navbar.css'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
	const isLoggedIn = sessionStorage.getItem('isLoggedIn')

	const handleLogout = () => {
		sessionStorage.removeItem("email");
		sessionStorage.removeItem("password");
		sessionStorage.removeItem('isLoggedIn', false);
		window.location.href = 'http://localhost:3000/signup'
	}

	return (
		<>
			<div className="navbar">
				{isLoggedIn ?
					<>
						<Link className="" to="/">
							<i className="fa fa-fw fa-home"></i>
							Build Burger
						</Link>
						<a className="" onClick={handleLogout}>
							<i className="fa fa-fw fa-sign-out"></i>
							Sign out
						</a>
					</>
					:
					<>
						<Link className="" to="/signin">
							<i className="fa fa-fw fa-user"></i>
							SignIn
						</Link>

						<Link className="" to="/signup">
							<i className="fa fa-fw fa-users"></i>
							SignUp
						</Link>
					</>
				}
			</div>
			<Outlet />
		</>
	)
}

export default Navbar
