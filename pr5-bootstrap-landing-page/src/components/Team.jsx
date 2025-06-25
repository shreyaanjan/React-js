import TeamCard from "./TeamCard";
import Title from "./Title"

const Team = () => {
    let title = "Innovative Team";
    let desc = "Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion"

    let cardContent = [
        {
            img: "/images/team-1.jpg",
            name: "Ahmed Kamal",
            role: "Developer of Softing",
        },
        {
            img: "/images/team-2.jpg",
            name: "Drunal Park",
            role: "Manager of Softing",
        },
        {
            img: "/images/team-3.jpg",
            name: "Munia Ankor",
            role: "Founder of Softing",
        },
    ]
    return (
        <section className="team-section">
            <div className="container">
                <Title title={title} desc={desc}/>
            </div>
            <div className="container">
                <div className="row mt-5">
                    {cardContent.map((item, idx)=>{
                        return <TeamCard key={idx} img={item.img} name={item.name} role={item.role}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Team