import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SingleContract = ({ contract }) => {
    const [showCompany, setShowCompany] = useState(false);
    const [showContract, setShowContract] = useState(false);
    const handleCloseCompany = () => setShowCompany(false);
    const handleShowCompany = () => setShowCompany(true);
    const handleCloseContract = () => setShowContract(false);
    const handleShowContract = () => setShowContract(true);

    return (
        <>
            <div className="col-xl-3 col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <div className="dropdown float-end">

                        </div>
                        <div className="d-flex align-items-center">
                            <div className="flex-1 ms-3">
                                <h5 className="font-size-16 mb-1">
                                    <a href="#" className="text-dark">
                                        {contract.contract_name}
                                    </a>
                                </h5>
                                <span className="badge badge-soft-success mb-0">
                                    {contract.status}
                                </span>
                            </div>
                        </div>
                        <div className="mt-3 pt-1">
                            <p className="text-muted mb-0">
                                <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary" />{" "}
                                {contract.Legal_officer_name}
                            </p>
                            <p className="text-muted mb-0 mt-2">
                                <i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary" />{" "}
                                PhyllisGatlin@spy.com
                            </p>
                            <p className="text-muted mb-0 mt-2">
                                <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary" />{" "}
                                52 Ilchester MYBSTER 9WX
                            </p>
                        </div>
                        <div className="d-flex gap-2 pt-4">
                            {/* <button
                                type="button"
                                className="btn btn-soft-primary btn-sm w-50"
                            >
                                

                            </button> */}
                            <Button variant="primary" onClick={handleShowCompany}>
                                <i className="bx bx-user me-1" /> Company
                            </Button>

                            <Modal show={showCompany} onHide={handleCloseCompany}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{contract.company_name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Company Phone: {contract.company_phone}</p>
                                    <p>Company Address: {contract.address}</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseCompany}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleCloseCompany}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <Button variant="secondary" onClick={handleShowContract}>
                                <i className="bx bx-message-square-dots me-1" /> Contract Details
                            </Button>

                            <Modal show={showContract} onHide={handleCloseContract}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{contract.company_name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Company Phone: {contract.company_phone}</p>

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseContract}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleShowContract}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleContract