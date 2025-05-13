import LeftSide from "./leftSide";
import RightSide from "./RightSide";

const Hero = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <LeftSide/>
                    <RightSide/>
                </div>
            </div>
        </section>
    )
}

export default Hero;