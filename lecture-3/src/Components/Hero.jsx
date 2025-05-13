import LeftSide from "./leftSide";
import RightSide from "./RightSide";

const Hero = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <LeftSide />
                    </div>
                    <div className="col-6">
                        <RightSide />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;