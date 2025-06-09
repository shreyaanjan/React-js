const AboutCard = ({icon, title, desc}) => {
    return (
        <div className="col-6">
            <div className="about-card">
                {icon}
                <div className="card-body">
                    <h4 className="card-title text-capitalize my-3">{title}</h4>
                    <p className="card-text">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutCard