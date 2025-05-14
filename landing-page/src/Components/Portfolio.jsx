import PortCard from "./PortCard"

const Portfolio = () => {
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
    return (
        <section className="portfolio-sect">
            <div className="container">
                <h2 className="text-center text-white fw-bold">Our Portfolio</h2>
                <p className="text-center text-secondary mb-5 mt-3 text-max-800">We have already built amazing things for our customers.</p>
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