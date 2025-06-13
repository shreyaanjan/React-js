import PricingCard from "./PricingCard";
import Title from "./Title"

const Pricing = () => {
    let plan = [
        {
            iconArr: [
                {category:"Trial Version", price: "00.00"},
                {label: "Demo File",validation: true},
                {label: "Update",validation: false},
                {label: "File Compressed",validation: true},
                {label: "Commercial use",validation: true},
                {label: "Support",validation: false},
                {label: "2 Database",validation: false},
                {label: "Documentation",validation: true},
            ]
        },
        {
            iconArr: [
                {category:"Regular", price: "29.00"},
                {label: "Demo File",validation: true},
                {label: "Update",validation: true},
                {label: "File Compressed",validation: true},
                {label: "Commercial use",validation: false},
                {label: "Support",validation: true},
                {label: "5 Database",validation: false},
                {label: "Documentation",validation: true},
            ]
        },
        {
            iconArr: [
                {category:"Extended", price: "59.00"},
                {label: "Demo File",validation: true},
                {label: "Update",validation: true},
                {label: "File Compressed",validation: false},
                {label: "Commercial use",validation: true},
                {label: "Support",validation: false},
                {label: "8 Database",validation: true},
                {label: "Documentation",validation: true},
            ]
        },   
    ]
    let title = "Our Packages";
    let desc = "Learning day desirous informed expenses material returned six the.She enabled invited exposed him another.Reasonably conviction solicitude me mr at discretion"
    return (
        <section className="pricing-section">
            <div className="container">
                <Title title={title} desc={desc}/>
            </div>
            <div className="container">
                <div className="row">
                    {plan.map((obj, idx)=>{
                        return <PricingCard key={idx} iconArr={obj.iconArr} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Pricing
