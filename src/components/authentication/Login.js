import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleEmail = (e) => {
        setUser({
            ...user,
            email: e.target.value
        });
    }
    const handlePassword = (e) => {
        setUser({
            ...user,
            password: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
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
                            <div className="form-floating mb-3">
                                <input type="email" onChange={handleEmail} value={user.email} className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>

                            <div className="form-floating mb-3 mt-3">
                                <input type="password" onChange={handlePassword} value={user.password} className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>


                            <div className='d-grid'>
                                <button type="submit" className="btn-lg btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign in</button>
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