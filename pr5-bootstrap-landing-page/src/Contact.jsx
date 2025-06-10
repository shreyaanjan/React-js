import Title from "./components/Title"
import { FaMapLocationDot } from "react-icons/fa6";
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
                            <ul className="info p-0">
                                <li className="d-flex gap-3">
                                    <span className="fs-4 contact-icon"><FaMapLocationDot /></span>
                                    <p>22 Baker Street, <br /> London, United Kingdom, <br /> W1U 3BW </p>
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