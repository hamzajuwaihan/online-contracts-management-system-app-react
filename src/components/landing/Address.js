import React from 'react'

export const Address = () => {
    return (
        <div className="container-fluid bg-dark p-0">
            <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                    <div className="h-100 d-inline-flex align-items-center me-4">
                        <small className="fa fa-map-marker-alt text-primary me-2"></small>
                        <small>Queen Rania Street, Amman, jordan</small>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center">
                        <small className="far fa-clock text-primary me-2"></small>
                        <small>Sunday- Thursday : 09.00 AM - 05.00 PM</small>
                    </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                    <div className="h-100 d-inline-flex align-items-center me-4">
                        <small className="fa fa-phone-alt text-primary me-2"></small>
                        <small>+962778098737</small>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center mx-n2">
                        <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.linkedin.com/in/bara-abusaleem-b38a96201/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-square btn-link rounded-0" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
