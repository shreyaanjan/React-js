import { useState } from "react";
import Image from "./Image"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
                    <div className="d-none d-md-flex">
                        <button className="rounded-pill head-btn text-white text-capitalize">Try it free</button>
                    </div>
                    <Button variant="primary" className="d-flex d-md-none" onClick={handleShow}>
                        Launch
                    </Button>
                </div>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    )
}

export default Header