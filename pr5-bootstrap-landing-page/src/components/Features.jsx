import Image from "./Image";
import Title from "./Title"
import { TfiHandDrag } from "react-icons/tfi";
import { BsIntersect } from "react-icons/bs";
import { IoIosColorFilter } from "react-icons/io";
import { LuScreenShare } from "react-icons/lu";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
    let title = "Our Features";
    let desc = "Learning day desirous informed expenses material returned six the.She enabled invited exposed him another.Reasonably conviction solicitude me mr at discretion"
    let image = "/public/images/feature-1.png"

    let cardContent = [
        {
            icon: TfiHandDrag,
            title: "Drag and drop",
            desc: "Dried quick round it or order west percent did any Say out noise yo.",
        },
        {
            icon: BsIntersect,
            title: "App integration",
            desc: "Pferer quick round it or order west percent did any Say out noise yo.",
        },
        {
            icon: IoIosColorFilter,
            title: "Color Schemes",
            desc: "Regular quick round it or order west percent did any Say out noise yo.",
        },
        {
            icon: LuScreenShare,
            title: "High Resolution",
            desc: "Tired quick round it or order west percent did any Say out noise yo.",
        },
    ]
    return (
        <section className="features-section">
            <div className="container">
                <Title title={title} desc={desc} />
            </div>
            <div className="container">
                <div className="row py-5">
                    <div className="col-xl-5">
                        <div className="d-flex align-items-center justify-content-center">
                            <Image img={image} />
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="feature-box d-flex align-items-center h-100">
                            <div className="row gy-4 ">
                                {cardContent.map((item, idx) => {
                                    return <FeaturesCard key={idx} icon={item.icon} title={item.title} desc={item.desc} />
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features