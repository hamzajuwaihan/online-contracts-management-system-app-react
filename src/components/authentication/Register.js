import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Register = () => {
    return (
        <div className='col-6' style={{ height: "100%" }}>
            <ul className="nav nav-pills nav-justified mb-3 mt-5 " id="ex1" role="tablist">
                <li className="nav-item me-2" role="presentation">
                    <NavLink className="nav-link bg-primary btn-lg text-white" to="/login">Login</NavLink>
                </li>
                <li className="nav-item ms-2" role="presentation">
                    <NavLink className="nav-link btn-lg bg-primary text-white" to="/register">Register</NavLink>
                </li>
            </ul>
            <form>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="name" placeholder="name@example.com" />
                    <label htmlFor="name">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                    <label htmlFor="email">Email address</label>
                </div>

                <div class="form-floating mb-3 mt-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div class="form-floating mb-3 mt-3">
                    <input type="password" class="form-control" id="repeatPassword" placeholder="Repeat Password" />
                    <label htmlFor="repeatPassword">Repeat Password</label>
                </div>


                <div className='d-grid'>
                    <button type="submit" className="btn btn-lg btn-primary btn-block mb-4">Register</button>
                </div>
                <div className="text-center">
                    <p>Have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Register