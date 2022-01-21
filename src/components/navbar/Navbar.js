import React from "react"
import './navbar.css'
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar">
                <Link className="" to="/">
                    <i className="fa fa-fw fa-home"></i>
                    Build Burger
                </Link>

                <Link className="" to="/signin">
                    <i className="fa fa-fw fa-user"></i>
                    SignIn
                </Link>

                <Link className="" to="/signup">
                    <i className="fa fa-fw fa-users"></i>
                    SignUp
                </Link>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
