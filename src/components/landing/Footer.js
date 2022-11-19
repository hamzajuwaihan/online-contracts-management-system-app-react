import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Address</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Queen Rania Street, Amman, jordan</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+962778098737</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@Sofixcompany.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-outline-light btn-social" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square btn-outline-light btn-social" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square btn-outline-light btn-social" href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-square btn-outline-light btn-social" href="https://www.linkedin.com/in/bara-abusaleem-b38a96201/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link" href="http://localhost:3000/about">About Us</a>
                        <a className="btn btn-link" href="http://localhost:3000/contact">Contact Us</a>
                        <a className="btn btn-link" href="http://localhost:3000/service.html">Our Services</a>
                        <a className="btn btn-link" href="http://localhost:3000/testimonial.html">Terms & Condition</a>
                        <a className="btn btn-link" href="http://localhost:3000/contact">Support</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Project Gallery</h5>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid rounded" src="img/deed_550x450.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded" src="Recruitment-companies-AD-AR12112020-4-1024x444_550x450.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded" src="img/things-to-do-before_550x450.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded" src="img/agr_1_550x450.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded" src="img/agreement-17115865_550x450.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded" src="img/98-ForwardContract_2_550x450.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a href="Sofix ">Your Site Name</a>, Sofix company.
                        </div>
                        <div className="col-md-6 text-center text-md-end">

                          
                           
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer