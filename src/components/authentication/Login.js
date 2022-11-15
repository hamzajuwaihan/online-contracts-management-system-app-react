import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className='col-6' style={{ height: "100%" }}>
                <ul className="nav nav-pills nav-justified mb-3 mt-5 " id="ex1" role="tablist">
                    <li className="nav-item me-2" role="presentation">
                        <NavLink className="nav-link bg-primary text-white" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item ms-2" role="presentation">
                        <NavLink className="nav-link bg-primary text-white" to="/register">Register</NavLink>
                    </li>
                </ul>

                <div className="tab-content" >
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form className='mt-5'>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>

                            <div class="form-floating mb-3 mt-3">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>


                            <div className='d-grid'>
                                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                            </div>
                            <div className="text-center">
                                <p>Not a member? <Link to="/register">Register</Link></p>
                            </div>
                        </form>
                    </div>
                    <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                        <form>
                            <div className="text-center mb-3">
                                <p>Sign up with:</p>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>

                            <p className="text-center">or:</p>

                            <div className="form-outline mb-4">
                                <input type="text" id="registerName" className="form-control" />
                                <label className="form-label" htmlFor="registerName">Name</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="text" id="registerUsername" className="form-control" />
                                <label className="form-label" htmlFor="registerUsername">Username</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="email" id="registerEmail" className="form-control" />
                                <label className="form-label" htmlFor="registerEmail">Email</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="registerPassword" className="form-control" />
                                <label className="form-label" htmlFor="registerPassword">Password</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="registerRepeatPassword" className="form-control" />
                                <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                            </div>


                            <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Login