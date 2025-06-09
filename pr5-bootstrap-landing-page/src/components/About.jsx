import AboutCard from "./AboutCard"
import { FaTicketAlt } from "react-icons/fa";
import { SlSpeech } from "react-icons/sl";
import { IoIosMailOpen } from "react-icons/io";
import { FaFileUpload } from "react-icons/fa";
const About = () => {
    let cardContent = [
        {
            icon: FaTicketAlt,
            title: "Ticket manage",
            desc: "Downs those still witty an balls so chief so. Moment an little remain no lively",
        },
        {
            icon: SlSpeech,
            title: "Live messaging",
            desc: "Downs those still witty an balls so chief so. Moment an little remain no lively",
        },
        {
            icon: IoIosMailOpen,
            title: "Email workflow",
            desc: "Downs those still witty an balls so chief so. Moment an little remain no lively",
        },
        {
            icon: FaFileUpload,
            title: "File upload",
            desc: "Downs those still witty an balls so chief so. Moment an little remain no lively",
        },
    ]
    return (
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h5 className="text-uppercase">Story about us</h5>
                        <h2>Create your app page <br /> with expert developer</h2>
                        <p className="mt-4">
                            Both rest of know draw fond post as. It agreement defective to excellent. Feebly do engage of narrow. Extensive repulsive belonging depending if promotion be zealously as. Preference inquietude ask now are dispatched led appearance. Small meant in so doubt hopes.
                        </p>
                        <button className="rounded-pill head-btn text-white text-capitalize">read more</button>
                        <div className="bottom-info mt-4 border-top pt-4">
                            <h3>Why Choose Us</h3>
                            <ul className="p-0">
                                <li className="my-3 d-flex gap-3 align-items-center">
                                    <span>
                                        <i className="bi bi-check "></i>
                                    </span>
                                    <p className="m-0">Elderly is detract tedious assured private</p>
                                </li>
                                <li className="my-3 d-flex gap-3 align-items-center">
                                    <span>
                                        <i className="bi bi-check "></i>
                                    </span>
                                    <p className="m-0">Do travelling companions contrasted</p>
                                </li>
                                <li className="my-3 d-flex gap-3 align-items-center">
                                    <span>
                                        <i className="bi bi-check "></i>
                                    </span>
                                    <p className="m-0">Mistress strongly remember up</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row gy-4">
                            {cardContent.map((item, idx)=>{
                                return <AboutCard key={idx} icon={item.icon} title={item.title} desc={item.desc} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About