import PricingCard from "./PricingCard";
import Title from "./Title"

const Pricing = () => {
    let title = "Our Packages";
    let desc = "Learning day desirous informed expenses material returned six the.She enabled invited exposed him another.Reasonably conviction solicitude me mr at discretion"
    return (
        <section className="pricing-section">
            <div className="container">
                <Title title={title} desc={desc}/>
            </div>
            <div className="container">
                <div className="row">
                    <PricingCard />
                </div>
            </div>
        </section>
    )
}

export default Pricing
