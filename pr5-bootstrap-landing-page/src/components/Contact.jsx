import Title from "./Title"
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
    let title = "Contact Us";
    let desc = "Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion";
    return (
        <section className="contact-section">
            <div className="container">
                <Title title={title} desc={desc} />
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <div className="address">
                            <h4 className="text-uppercase">Our Office Address</h4>
                            <ul className="contact-info p-0 mt-3 pb-3">
                                <li className="d-flex my-3 gap-3">
                                    <span className="fs-4 contact-icon"><FaMapLocationDot /></span>
                                    <p className="m-0">22 Baker Street, <br /> London, United Kingdom, <br /> W1U 3BW </p>
                                </li>
                                <li className="d-flex my-3 align-items-center gap-3">
                                    <span className="fs-4 contact-icon"><IoCall /></span>
                                    <p className="m-0 pt-2">+44-20-7328-4499</p>
                                </li>
                                <li className="d-flex my-3 align-items-center gap-3">
                                    <span className="fs-4 contact-icon"><IoIosMailOpen /></span>
                                    <p className="m-0 pt-2">info@yourdomain.com</p>
                                </li>
                            </ul>
                            <div className="social-2 pt-5 border-top">
                                <h4 className="text-uppercase pb-3">Social Address</h4>
                                <ul className="p-0 m-0 d-flex align-items-center gap-2">
                                    <li className="fb"><FaFacebook /></li>
                                    <li className="twitter"><FaTwitter /></li>
                                    <li className="pinterest"><FaPinterest /></li>
                                    <li className="insta"><FaInstagram /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="contact-form">
                            <h2 className="text-capitalize">Let's lalk about your idea</h2>
                            <form action="">
                                <div className="my-3">
                                    <input type="text" className="form-control p-2" name="name" id="name" placeholder="Name" />
                                </div>
                                <div className="d-flex gap-2 my-3">
                                    <input type="email" className="form-control p-2" name="email" id="email" placeholder="Email*" />
                                    <input type="tel" className="form-control p-2" name="phone" id="phone" placeholder="Phone" />
                                </div>
                                <div className="my-3">
                                    <textarea name="comments" className="form-control" id="comments" placeholder="Tell Us About Project*"></textarea>
                                </div>
                                <div>
                                    <button class="rounded head-btn text-white text-capitalize d-flex align-items-center gap-2">send message <FaPaperPlane /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact