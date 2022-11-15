import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='col-6' style={{ height: "100%" }}>
                <ul className="nav nav-pills nav-justified mb-3 mt-5 " id="ex1" role="tablist">
                    <li className="nav-item me-2" role="presentation">
                        <NavLink className="nav-link bg-primary btn-lg text-white" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item ms-2" role="presentation">
                        <NavLink className="nav-link bg-primary btn-lg text-white" to="/register">Register</NavLink>
                    </li>
                </ul>

                <div className="tab-content" >
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form className='mt-5'>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>

                            <div class="form-floating mb-3 mt-3">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>


                            <div className='d-grid'>
                                <button type="submit" className="btn-lg btn btn-primary btn-block mb-4">Sign in</button>
                            </div>
                            <div className="text-center">
                                <p>Not a member? <Link to="/register">Register</Link></p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


        </>

    )
}

export default Login