import Image from "./Image"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const TeamCard = ({ name, role, img }) => {
    return (
        <div className="col-4">
            <div className="team-item">
                <div className="image">
                    <Image img={img} />
                    <div className="social">
                        <ul className="p-0 m-0 d-flex align-items-center justify-content-evenly">
                            <li className="fb"><FaFacebook /></li>
                            <li className="twitter"><FaTwitter /></li>
                            <li className="pinterest"><FaPinterest /></li>
                            <li className="insta"><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
                <div className="team-info">
                    <h4>{name}</h4>
                    <p className="text-uppercase m-0">{role}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamCard