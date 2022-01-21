import React from "react"

function Session() {
    return (
        <div className="auth-form">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn-submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Session
