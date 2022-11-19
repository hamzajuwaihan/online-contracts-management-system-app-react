import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Slider = () => {
    return (
        <div className="container-fluid p-0 pb-5 wow fadeIn" >
            <OwlCarousel items={1}
                loop={true}
                autoplay={true}
            >
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="./img/Wriin.jpg" alt="" />
                    <div className="owl-carousel-inner">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-2 text-white animated slideInDown">
A smart contract management system</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-3">A Contract Management System (CMS), sometimes called Control Lifecycle Management manages the production and management of contracts, Service Level Agreements (SLA) and Procurement Master Agreements. Features of a good Contract Management System includes: Storage of the company’s standardized contracts.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/headquarters_.jpg" alt="" />
                    <div className="owl-carousel-inner">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-2 text-white animated slideInDown">
A smart contract management system</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-3">2Agree is a contract management system to easily manage and monitor all contracts during the contract life cycle. By doing so you will be able to reduce costs and risks.</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/single.jpg" alt="" />
                    <div className="owl-carousel-inner">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-2 text-white animated slideInDown">A smart contract management system</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-3">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </OwlCarousel>

        </div>
    )
}

export default Slider