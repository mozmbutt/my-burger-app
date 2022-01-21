import React from "react"
import './registeration.css'

function Registeration() {
    return (
        <div className="auth-form">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter password again" />
                </div>

                <button type="submit" className="btn-submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Registeration