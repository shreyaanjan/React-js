import { useState } from "react";
import Image from "./Image"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let img = "/public/images/logo.png"
    return (
        <header className="header-section">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <Image img={img} />
                    </div>
                    <ul className="d-flex align-items-center d-none d-md-flex gap-4 m-0">
                        <li className="text-black fw-semibold">Home</li>
                        <li className="text-black fw-semibold">Features</li>
                        <li className="text-black fw-semibold">Overview</li>
                        <li className="text-black fw-semibold">Pricing</li>
                        <li className="text-black fw-semibold">Team</li>
                        <li className="text-black fw-semibold">Pages</li>
                        <li className="text-black fw-semibold">Contact</li>
                    </ul>
                    <div className="d-none d-lg-flex">
                        <button className="rounded-pill head-btn text-white text-capitalize">Try it free</button>
                    </div>
                    <Button variant="primary" className="d-flex d-md-none text-black fs-3 no-bg" onClick={handleShow}>
                        <RiMenuFill />
                    </Button>
                </div>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Image img={img} />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="gap-4 m-0">
                        <li className="text-black fw-semibold my-3 border-bottom pb-3">Home</li>
                        <li className="text-black fw-semibold my-3 border-bottom pb-3">Features</li>
                        <li className="text-black fw-semibold my-3 border-bottom pb-3">Overview</li>
                        <li className="text-black fw-semibold my-3 border-bottom pb-3">Pricing</li>
                        <li className="text-black fw-semibold my-3 border-bottom pb-3">Team</li>
                        <li className="text-black fw-semibold my-3 border-bottom pb-3">Pages</li>
                        <li className="text-black fw-semibold my-3 border-bottom pb-3">Contact</li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    )
}

export default Header