import PortCard from "./PortCard"
import Title from "./Title"

let arr = [
    {
        title: "Visual Art",
        desc: "An impressive creation for a cosmetics company.",
        img: "/public/image/work-1.webp",
        border:"left-effect",
       
    },
    {
        title: "Abstract Design",
        desc: "We seek to obtain something innovative from art.",
        img: "/public/image/work-2.webp",
    },
    {
        title: "Creative Painting",
        desc: "We combine the use of balanced colors with painting.",
        img: "/public/image/work-3.webp",
        border:"right-effect",
    }
]
const Portfolio = () => {
    let title= "Our Portfolio";
    let desc="We have already built amazing things for our customers.";

    return (
        <section className="portfolio-sect">
            <div className="container">
                <Title title={title} desc={desc} />
            </div>
            <div className="container">
                <div className="border-effect">
                    <div className={`row gy-5`}>
                        {arr.map((item) => {
                            return <PortCard title={item.title} effect={item.border} desc={item.desc} img={item.img} />
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio