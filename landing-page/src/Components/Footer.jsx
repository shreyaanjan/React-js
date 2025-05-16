const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="brand">
                            <div className="logo">
                                <h2>Leverage.</h2>
                            </div>
                            <p>
                                Authentic and innovative.
                                <br />
                                Built to the smallest detail
                                with a focus on usability
                                and performance.
                            </p>
                            <div className="icons d-flex align-items-center gap-5">
                                <i class="bi bi-instagram fs-5"></i>
                                <i class="bi bi-facebook fs-5"></i>
                                <i class="bi bi-linkedin fs-5"></i>
                                <i class="bi bi-twitter fs-5"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="touch-sect">
                            <h4 className="text-white fw-semibold">Get in Touch</h4>
                            <ul className="m-0 p-0">
                                <li className="my-3">
                                    <i class="bi bi-telephone me-3"></i>
                                    <span>
                                        +1 123 98765 4321
                                    </span>
                                </li>
                                <li className="my-3">
                                    <i class="bi bi-envelope me-3"></i>
                                    <span>
                                        hello@business.com
                                    </span>
                                </li>
                                <li className="my-3">
                                    <i class="bi bi-geo-alt me-3"></i>
                                    <span>
                                        Office Street, 123
                                    </span>
                                </li>
                            </ul>
                            <button type="button" class="contact-btn text-uppercase"><i class="bi bi-chat-left-dots"></i>Send a message</button>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="services">
                            <h4 className="text-white fw-semibold">Our Services</h4>
                            <ul className="m-0 pt-3 p-0">
                                <li className="my-2">Website Development</li>
                                <li className="my-2">Building Applications</li>
                                <li className="my-2">SEO & Digital Marketing</li>
                                <li className="my-2">Branding and Identity</li>
                                <li className="my-2">Digital Images & Videos</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="tags">
                            <h4 className="text-white fw-semibold">Popular Tags</h4>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer