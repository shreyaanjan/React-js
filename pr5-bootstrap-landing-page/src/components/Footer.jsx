import Image from "./Image"
import { FaHome } from "react-icons/fa";
const Footer = () => {
    let img = "/public/images/logo.png"
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="footer-left">
                            <Image img={img} />
                            <p className="my-4">
                                Excellence decisively nay man yet impression for contrasted remarkably. There spoke happy for you are out. Fertile how old address did showing
                            </p>
                            <button className="rounded-pill head-btn text-white text-capitalize">get started</button>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="footer-link">
                            <h4 className="mb-4">Quick Link</h4>
                            <ul className="p-0">
                                <li className="my-3">Home</li>
                                <li className="my-3">About Us</li>
                                <li className="my-3">Company History</li>
                                <li className="my-3">Features</li>
                                <li className="my-3">Blog Page</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="footer-link">
                            <h4 className="mb-4">Community</h4>
                            <ul className="p-0">
                                <li className="my-3">Career</li>
                                <li className="my-3">Leadership</li>
                                <li className="my-3">Strategy</li>
                                <li className="my-3">Services</li>
                                <li className="my-3">History</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="contact-widget">
                            <div className="address">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <FaHome />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer