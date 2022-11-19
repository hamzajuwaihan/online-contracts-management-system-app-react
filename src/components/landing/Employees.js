import React from 'react'
import q from './AlQassem_Oweida.jpg';
import e from './WhatsApp_Image_2022-11-12_at_10.21.50_PM.jpeg.jpg';
import h from './index.jpg';

export const Employees = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                    <h6 className="text-primary">Team Member</h6>
                    <h1 className="mb-4">Experienced Team Members</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="d-flex">
                                <img className="img-fluid w-75" src={h} alt="../404/AlQassem_Oweida.jpg" />
                                <div className="team-social w-25">
                                <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://ar-ar.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="p-4">
                                <h5>Hasan abu hashem</h5>
                                <span>Designation</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="d-flex">
                                <img className="img-fluid w-75" src={q} alt="" />
                                <div className="team-social w-25">
                                    <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://ar-ar.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="p-4">
                                <h5>Al qassem qweida</h5>
                                <span>Designation</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="d-flex">
                                <img className="img-fluid w-75" style={{height:'420px'}} src={e} alt=""  />
                                <div className="team-social w-25">
                                    <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://ar-ar.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="p-4">
                                <h5>Emran abu azzam</h5>
                                <span>Designation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
