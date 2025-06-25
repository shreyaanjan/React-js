import Image from "./Image"

const Hero = () => {
    let image = "/images/hero-1.png";

    return (
        <section className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="hero-content">
                            <h1>Softing help to building <span className="blue-color">software</span> </h1>
                            <p className="mt-4">
                                Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Latter remark hunted enough vulgar.
                            </p>
                            <div className="hero-btn">
                                <button className="rounded-pill head-btn text-white text-capitalize">get started</button>
                            </div>
                            {/* <button className="video rounded-pill border-0 text-white"><i className="bi bi-play"></i></button> */}
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img">
                            <Image img={image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero