import Title from "./Title"

const Features = () => {
    let title = "Our Features";
    let desc = "Learning day desirous informed expenses material returned six the.She enabled invited exposed him another.Reasonably conviction solicitude me mr at discretion"
    return (
        <section className="features-section">
            <div className="container">
                <Title title={title} desc={desc} />
            </div>
        </section>
    )
}

export default Features