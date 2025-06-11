import Title from "./Title"
import { FaMapLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";
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
                            <ul className="contact-info p-0">
                                <li className="d-flex gap-3">
                                    <span className="fs-4 contact-icon"><FaMapLocationDot /></span>
                                    <p className="mt-2">22 Baker Street, <br /> London, United Kingdom, <br /> W1U 3BW </p>
                                </li>
                                <li className="d-flex gap-3">
                                    <span className="fs-4 contact-icon"><IoCall /></span>
                                    <p className="mt-2">+44-20-7328-4499</p>
                                </li>
                                <li className="d-flex gap-3">
                                    <span className="fs-4 contact-icon"><IoIosMailOpen /></span>
                                    <p className="mt-2">info@yourdomain.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact